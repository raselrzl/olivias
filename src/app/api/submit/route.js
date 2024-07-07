// src/app/api/submit/route.js
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = 'your_database_name';
const COLLECTION_NAME = 'your_collection_name';

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const result = await collection.insertOne({ name, email, subject, message });
    return new Response(JSON.stringify({ message: 'Form data saved successfully!', result }), { status: 200 });
  } catch (error) {
    console.error('Database connection error:', error);
    return new Response(JSON.stringify({ error: 'Failed to save form data', details: error.message }), { status: 500 });
  }
}

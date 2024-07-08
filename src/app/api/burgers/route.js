// src/app/api/burgers/route.js
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'Burgers';

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

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const burgers = await collection.find({}).toArray();
    return new Response(JSON.stringify(burgers), { status: 200 });
  } catch (error) {
    console.error('Database connection error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch burgers', details: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  const { src, title, price, description } = await req.json();

  if (!src || !title || !price || !description) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const result = await collection.insertOne({ src, title, price, description });
    return new Response(JSON.stringify({ message: 'Burger data saved successfully!', result }), { status: 200 });
  } catch (error) {
    console.error('Database connection error:', error);
    return new Response(JSON.stringify({ error: 'Failed to save burger data', details: error.message }), { status: 500 });
  }
}

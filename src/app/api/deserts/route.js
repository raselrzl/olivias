// src/app/api/deserts/route.js

import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://rasel6041:tJdut5cpN2g3gq3@cluster0.zlo8hzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'Deserts';

export async function GET() {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Fetch all desert data from the collection
    const deserts = await collection.find({}).toArray();
    
    return new Response(JSON.stringify(deserts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching deserts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch deserts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    await client.close();
  }
}

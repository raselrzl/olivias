// src/app/api/popularBurgers/route.js

import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://rasel6041:tJdut5cpN2g3gq3@cluster0.zlo8hzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'PopularBurgers';

export async function GET() {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const popularBurgers = await collection.find({}).toArray();
    
    return new Response(JSON.stringify(popularBurgers), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching popular burgers:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch popular burgers' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    await client.close();
  }
}

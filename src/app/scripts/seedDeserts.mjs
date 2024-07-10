// src/app/scripts/seedDeserts.mjs
import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://rasel6041:tJdut5cpN2g3gq3@cluster0.zlo8hzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'Deserts'; // Changed the collection name to 'Deserts'

const desertData = [
    {
        src: 'images/milkshake.jpg',
        title: 'Milkshake',
        price: 'SEK125',
        description: 'A creamy milkshake made with the finest ingredients.',
      },
      {
        src: 'images/milkshake.jpg',
        title: 'Milkshake',
        price: 'SEK125',
        description: 'A creamy milkshake made with the finest ingredients.',
      },
      {
        src: 'images/milkshake.jpg',
        title: 'Milkshake',
        price: 'SEK125',
        description: 'A creamy milkshake made with the finest ingredients.',
      },
      {
        src: 'images/milkshake.jpg',
        title: 'Milkshake',
        price: 'SEK125',
        description: 'A creamy milkshake made with the finest ingredients.',
      },
  // Add more desert objects as needed
];

async function seedDeserts() {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Clear the collection
    await collection.deleteMany({});
    console.log('Cleared existing deserts');

    // Insert new desert data
    const result = await collection.insertMany(desertData);
    console.log(`Inserted ${result.insertedCount} deserts`);
  } catch (error) {
    console.error('Error seeding deserts:', error);
  } finally {
    await client.close();
  }
}

seedDeserts();

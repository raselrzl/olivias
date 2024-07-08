// src/app/scripts/seedExtras.mjs
import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://rasel6041:tJdut5cpN2g3gq3@cluster0.zlo8hzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'Extras'; // Changed the collection name to 'Extras'

const extrasData = [
  {
    src: 'images/crispyFries1.png',
    title: 'Crispy Fries',
    price: 'SEK125',
    description: 'Deliciously crispy fries to accompany any meal.',
  },
  {
    src: 'images/crispyFries1.png',
    title: 'Crispy Fries',
    price: 'SEK125',
    description: 'Deliciously crispy fries to accompany any meal.',
  },
  {
    src: 'images/crispyFries1.png',
    title: 'Crispy Fries',
    price: 'SEK125',
    description: 'Deliciously crispy fries to accompany any meal.',
  },
  {
    src: 'images/crispyFries1.png',
    title: 'Crispy Fries',
    price: 'SEK125',
    description: 'Deliciously crispy fries to accompany any meal.',
  },
  // Add more extras objects as needed
];

async function seedExtras() {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Clear the collection
    await collection.deleteMany({});
    console.log('Cleared existing extras');

    // Insert new extras data
    const result = await collection.insertMany(extrasData);
    console.log(`Inserted ${result.insertedCount} extras`);
  } catch (error) {
    console.error('Error seeding extras:', error);
  } finally {
    await client.close();
  }
}

seedExtras();

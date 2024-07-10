// src/app/scripts/seedPopularBurgers.mjs
import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://rasel6041:tJdut5cpN2g3gq3@cluster0.zlo8hzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'PopularBurgers'; // Changed the collection name to 'PopularBurgers'

const burgerData = [
  {
    src: 'images/burger1.png',
    title: 'Tryffel',
    price: 'SEK125',
    description: 'Burger bliss like never before with our smash burgers.',
  },
  {
    src: 'images/burger1.png',
    title: 'Margherita',
    price: 'SEK125',
    description: 'Burger bliss like never before with our smash burgers.',
  },
  {
    src: 'images/burger1.png',
    title: 'Chili',
    price: 'SEK125',
    description: 'Burger bliss like never before with our smash burgers.',
  },
  {
    src: 'images/burger1.png',
    title: 'Cheese',
    price: 'SEK125',
    description: 'Burger bliss like never before with our smash burgers.',
  },
  // Add more burger objects as needed
];

async function seedPopularBurgers() {
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Clear the collection
    await collection.deleteMany({});
    console.log('Cleared existing popular burgers');

    // Insert new burger data
    const result = await collection.insertMany(burgerData);
    console.log(`Inserted ${result.insertedCount} popular burgers`);
  } catch (error) {
    console.error('Error seeding popular burgers:', error);
  } finally {
    await client.close();
  }
}

seedPopularBurgers();
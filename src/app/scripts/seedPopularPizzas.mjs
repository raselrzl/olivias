import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://username:password@cluster0.zlo8hzx.mongodb.net/JAYS?retryWrites=true&w=majority';
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'PopularPizzas';

const pizzaData = [
  {
    title: 'Margherita',
    price: 'SEK125',
    description: 'Classic pizza with tomato sauce and mozzarella cheese.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Pepperoni',
    price: 'SEK125',
    description: 'Spicy pepperoni with mozzarella cheese and tomato sauce.',
    src: 'images/pizza1.png',
  },
  {
    title: 'BBQ Chicken',
    price: 'SEK125',
    description: 'BBQ sauce, chicken, and fresh vegetables on a crispy crust.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Veggie Supreme',
    price: 'SEK125',
    description: 'Loaded with a variety of fresh vegetables and cheese.',
    src: 'images/pizza1.png',
  },
];

async function seedPopularPizzas() {
  const client = new MongoClient(MONGODB_URI, {
    tls: true,
    serverApi: {
      version: '1',
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Clear the collection
    await collection.deleteMany({});
    console.log('Cleared existing popular pizzas');

    // Insert new pizza data
    const result = await collection.insertMany(pizzaData);
    console.log(`Inserted ${result.insertedCount} popular pizzas`);
  } catch (error) {
    console.error('Error seeding popular pizzas:', error);
  } finally {
    await client.close();
  }
}

seedPopularPizzas();

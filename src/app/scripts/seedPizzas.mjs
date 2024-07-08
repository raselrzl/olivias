import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://rasel6041:tJdut5cpN2g3gq3@cluster0.zlo8hzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Directly set the URI here
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'Pizzas';

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
  {
    title: 'Hawaiian',
    price: 'SEK125',
    description: 'Ham, pineapple, and cheese on a classic crust.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Four Cheese',
    price: 'SEK125',
    description: 'A blend of four delicious cheeses on a cheesy base.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Seafood Special',
    price: 'SEK125',
    description: 'A mix of fresh seafood with mozzarella cheese and tomato sauce.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Spicy Italian',
    price: 'SEK125',
    description: 'Spicy Italian sausage with cheese and tomato sauce.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Meat Lover\'s',
    price: 'SEK125',
    description: 'A carnivore’s delight with various meats and cheese.',
    src: 'images/pizza1.png',
  },
  {
    title: 'Classic Cheese',
    price: 'SEK125',
    description: 'A classic cheese pizza with a crispy crust.',
    src: 'images/pizza1.png',
  },
];

async function seedPizzas() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Clear the collection
    await collection.deleteMany({});
    console.log('Cleared existing pizzas');

    // Insert new pizza data
    const result = await collection.insertMany(pizzaData);
    console.log(`Inserted ${result.insertedCount} pizzas`);
  } catch (error) {
    console.error('Error seeding pizzas:', error);
  } finally {
    await client.close();
  }
}

seedPizzas();

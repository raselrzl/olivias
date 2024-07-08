import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = 'JAYS';
const COLLECTION_NAME = 'PopularPizzas';

export async function GET() {
  const client = new MongoClient(MONGODB_URI, {
    tls: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const pizzas = await collection.find({}, { projection: { _id: 1, title: 1, price: 1, description: 1, src: 1 } }).toArray();

    return new Response(JSON.stringify(pizzas), { status: 200 });
  } catch (error) {
    console.error('Error fetching pizzas:', error);
    return new Response('Error fetching pizzas', { status: 500 });
  } finally {
    await client.close();
  }
}

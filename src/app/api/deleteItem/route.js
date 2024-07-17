import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Make sure to have this in your .env file
const dbName = 'jays'; // Your database name

export async function DELETE(req, res) {
  const { category, title } = await req.json();

  if (!category || !title) {
    return new Response(JSON.stringify({ message: 'Category and title are required' }), { status: 400 });
  }

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('menuItems');

    const result = await collection.updateOne(
      { category },
      { $pull: { items: { title } } }
    );

    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ message: 'Item not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Item deleted successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  } finally {
    await client.close();
  }
}

export async function GET(req, res) {
  res.status(405).json({ message: `Method ${req.method} not allowed` });
}

export async function POST(req, res) {
  res.status(405).json({ message: `Method ${req.method} not allowed` });
}

export async function PUT(req, res) {
  res.status(405).json({ message: `Method ${req.method} not allowed` });
}

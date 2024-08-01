import clientPromise from '@/lib/mongodb'; // Adjust the import path if needed

const dbName = 'jays'; // Your database name

export async function DELETE(req) {
  const { category, title } = await req.json();

  if (!category || !title) {
    return new Response(JSON.stringify({ message: 'Category and title are required' }), { status: 400 });
  }

  try {
    const client = await clientPromise;
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
  }
}

export async function GET(req) {
  return new Response(JSON.stringify({ message: 'Method GET not allowed' }), { status: 405 });
}

export async function POST(req) {
  return new Response(JSON.stringify({ message: 'Method POST not allowed' }), { status: 405 });
}

export async function PUT(req) {
  return new Response(JSON.stringify({ message: 'Method PUT not allowed' }), { status: 405 });
}

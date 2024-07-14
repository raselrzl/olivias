import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(request) {
    try {
        await client.connect();
        const db = client.db('jays');
        const collection = db.collection('menuItems');
        const { category, title, price, description } = await request.json();

        if (!category || !title || !price) {
            return new Response(JSON.stringify({ error: 'Category, title, and price are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Create a new item object
        const newItem = {
            title,
            price: parseFloat(price),
            description: description || '',
        };

        // Insert the new item into the specified category
        await collection.updateOne(
            { category },
            { $push: { items: newItem } },
            { upsert: true }
        );

        return new Response(JSON.stringify({ message: 'Item added successfully' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to add item' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

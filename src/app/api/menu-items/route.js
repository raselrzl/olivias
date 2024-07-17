import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(request) {
    try {
        await client.connect();
        const db = client.db('jays');
        const collection = db.collection('menuItems');
        const { category, title, price, description, src } = await request.json();  // Changed imageUrl to src

        // Ensure the required fields are provided
        if (!category || !title || !price || !src) {  // Changed imageUrl to src
            return new Response(
                JSON.stringify({ error: 'Category, title, price, and image source are required' }),  // Updated error message
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Check if price already has "SEK" prefix
        const priceWithSEK = price.startsWith('SEK') ? price : `SEK${price.trim()}`;

        // Create a new item object
        const newItem = {
            title,
            price: priceWithSEK,  // Keep price as string with SEK prefix
            description: description || '',
            src  // Changed imageUrl to src
        };

        // Insert the new item into the specified category
        await collection.updateOne(
            { category },
            { $push: { items: newItem } },
            { upsert: true }
        );

        return new Response(
            JSON.stringify({ message: 'Item added successfully' }),
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error(error);  // Log the error for debugging
        return new Response(
            JSON.stringify({ error: 'Failed to add item' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
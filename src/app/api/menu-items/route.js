import clientPromise from '@/lib/mongodb'; 

export async function POST(request) {
    try {
        const client = await clientPromise; 
        const db = client.db('jays'); 
        const collection = db.collection('menuItems');
        const { category, title, price, description, src } = await request.json(); 

        if (!category || !title || !price || !src) {  
            return new Response(
                JSON.stringify({ error: 'Category, title, price, and image source are required' }), 
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        const priceWithSEK = price.startsWith('SEK') ? price : `SEK${price.trim()}`;
        const newItem = {
            title,
            price: priceWithSEK,
            description: description || '',
            src 
        };
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
        console.log(error); 
        return new Response(
            JSON.stringify({ error: 'Failed to add item' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}

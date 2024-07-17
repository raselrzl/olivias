import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('jays'); // Replace with your database name
    const data = await db.collection('menuItems').find({}).toArray(); // Replace with your collection name
    
    // Log the fetched data in a readable format
    console.log('Fetched data:', JSON.stringify(data, null, 2));

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error); // Log any errors
    return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
  }
}

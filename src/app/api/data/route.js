import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    // Ensure the clientPromise is resolved correctly
    const client = await clientPromise;
    const db = client.db('jays'); // Replace with your database name
    const data = await db.collection('menuItems').find({}).toArray(); // Replace with your collection name
    
    // Log the fetched data in a readable format
    console.log('Fetched data:', JSON.stringify(data, null, 2));

    // Return the JSON response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error); // Log any errors

    // Return a JSON response with a 500 status code and error message
    return NextResponse.json(
      { message: 'Error fetching data', error: error.message },
      { status: 500 }
    );
  }
}

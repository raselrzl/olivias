import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    // Ensure the clientPromise is resolved correctly
    const client = await clientPromise;
    const db = client.db('jays'); // Replace with your database name
    const data = await db.collection('menuItems').find({}).toArray(); // Replace with your collection name
    
    // Create the JSON response with CORS headers
    const response = NextResponse.json(data);

    // Set CORS headers
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*'); // Change '*' to your frontend domain
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Powered-By, Content-Type, Accept');

    return response;
  } catch (error) {
    console.error('Error fetching data:', error); // Log any errors

    // Return a JSON response with a 500 status code and error message
    const response = NextResponse.json(
      { message: 'Error fetching data', error: error.message },
      { status: 500 }
    );

    // Set CORS headers
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Origin', '*'); // Change '*' to your frontend domain
    response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Powered-By, Content-Type, Accept');

    return response;
  }
}

// Handle preflight requests
export async function OPTIONS() {
  const response = NextResponse.json(null, { status: 204 });

  // Set CORS headers
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Origin', '*'); // Change '*' to your frontend domain
  response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-Powered-By, Content-Type, Accept');

  return response;
}

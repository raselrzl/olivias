/* import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Here, you would clear the user's session or token.
    // For example, if using cookies, you might clear the cookie like this:
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.set('token', '', { maxAge: 0 });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
 */

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // Import the shared client promise

export async function POST() {
  try {
    // Connect to the MongoDB client
    const client = await clientPromise;
    const db = client.db('jays'); // Access the database

    // Perform any database operations if needed
    // For example, you might update a user collection to mark them as logged out
    // const usersCollection = db.collection('users');
    // await usersCollection.updateOne({ /* criteria */ }, { $set: { loggedOutAt: new Date() } });

    // Clear the user's session or token
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.set('token', '', { maxAge: 0 });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

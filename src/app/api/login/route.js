import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // Adjust the import path if needed

const dbName = 'jays'; // Your database name

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Use the shared clientPromise to get the MongoDB client
    const client = await clientPromise;
    const db = client.db(dbName);
    const usersCollection = db.collection('users');

    // Find the user by email
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if the password matches
    if (user.password !== password) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Check if the user is an admin
    if (!user.isAdmin) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    // Return success response with user details
    return NextResponse.json({
      message: 'Login successful',
      user: {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      }
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

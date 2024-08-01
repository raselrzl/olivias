import clientPromise from '@/lib/mongodb'; // Import the shared client promise
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const client = await clientPromise; // Use the shared client promise
    const db = client.db('jays');
    const usersCollection = db.collection('users');

    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Insert the user into the database
    const newUser = {
      name,
      email,
      password, // Plain text password
      isAdmin: false,
      createdAt: new Date(),
    };
    await usersCollection.insertOne(newUser);

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

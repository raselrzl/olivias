import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db('jays');
  const collection = db.collection('Notifications');

  try {
    const data = await request.json();
    const { message, viewed = false } = data; // Default 'viewed' to false if not provided

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    await collection.insertOne({ 
      message, 
      createdAt: new Date(),
      viewed  // Add the 'viewed' field
    });

    return NextResponse.json({ message: 'Notification added successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add notification' }, { status: 500 });
  }
}

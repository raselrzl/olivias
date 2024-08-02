import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db('jays');
  const collection = db.collection('Notifications');

  try {
    const data = await request.json();
    const { message, viewed = false } = data;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    await collection.insertOne({ 
      message, 
      createdAt: new Date(),
      viewed  
    });

    return NextResponse.json({ message: 'Notification added successfully' });
  } catch (error) {
    console.error('Error adding notification:', error);
    return NextResponse.json({ error: 'Failed to add notification', details: error.message }, { status: 500 });
  }
}

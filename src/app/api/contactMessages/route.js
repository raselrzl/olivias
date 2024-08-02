import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // Adjust the import path if needed

const dbName = 'jays'; // Your database name

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('contactMessages');

    // Fetch all messages from the collection
    const messages = await collection.find().sort({ createdAt: -1 }).toArray();

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ message: 'Failed to fetch messages' }, { status: 500 });
  }
}

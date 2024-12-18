import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const dbName = 'jays';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('contactMessages');
    const messages = await collection.find().sort({ createdAt: -1 }).toArray();

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.log('Error fetching messages:', error);
    return NextResponse.json({ message: 'Failed to fetch messages' }, { status: 500 });
  }
}

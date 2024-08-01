import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // Adjust the import path if needed

const dbName = 'jays'; // Your database name

export async function POST(request) {
  try {
    // Use the shared clientPromise to get the MongoDB client
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('contactMessages');
    
    const { name, email, subject, message } = await request.json();
    
    // Insert the new message
    await collection.insertOne({ name, email, subject, message, createdAt: new Date() });
    
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}

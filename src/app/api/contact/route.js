import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // Adjust the import path if needed

const dbName = 'jays'; // Your database name

export async function POST(request) {
  try {
    // Use the shared clientPromise to get the MongoDB client
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('contactMessages');
    
    const { name, email, personnummer, message, phoneNumber, date, time, numPeople } = await request.json();
    
    // Insert the new message
    await collection.insertOne({ name, email, personnummer, message,phoneNumber, date, time, numPeople, createdAt: new Date() });
    
    return NextResponse.json({ message: 'Booking request sent successfully!' }, { status: 200 });
  } catch (error) {
    console.log('Error saving Booking:', error);
    return NextResponse.json({ message: 'Failed to send Booking request' }, { status: 500 });
  }
}

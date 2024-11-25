import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
const dbName = 'jays';
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('contactMessages');
    
    const { name, email, personnummer, message, phoneNumber, date, time, numPeople } = await request.json();
    
    await collection.insertOne({ name, email, personnummer, message,phoneNumber, date, time, numPeople, createdAt: new Date() });
    
    return NextResponse.json({ message: 'Booking request sent successfully!' }, { status: 200 });
  } catch (error) {
    console.log('Error saving Booking:', error);
    return NextResponse.json({ message: 'Failed to send Booking request' }, { status: 500 });
  }
}

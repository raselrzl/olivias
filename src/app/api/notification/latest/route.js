import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db('jays');
  const collection = db.collection('Notifications');

  try {
    console.log('Fetching latest notification from database...');
    const latestNotification = await collection.find().sort({ createdAt: -1 }).limit(1).toArray();
    console.log('Latest notification:', latestNotification);
    
    const response = { message: latestNotification.length > 0 ? latestNotification[0].message : 'No notifications available' };
    
    // Log response before sending it
    console.log('Response:', response);
    
    return NextResponse.json(response, { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } });
  } catch (error) {
    console.log('Failed to fetch notifications:', error);
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db('jays');
  const collection = db.collection('Notifications');

  try {
    const latestNotification = await collection.find().sort({ createdAt: -1 }).limit(1).toArray();

    if (latestNotification.length > 0) {
      return NextResponse.json({ message: latestNotification[0].message });
    } else {
      return NextResponse.json({ message: 'No notifications available' });
    }
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
  }
}

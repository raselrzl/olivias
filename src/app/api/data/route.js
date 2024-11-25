import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('jays');
    const data = await db.collection('menuItems').find({}).toArray();
    return NextResponse.json(data);
  } catch (error) {
    console.log('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Error fetching data', error: error.message },
      { status: 500 }
    );
  }
}

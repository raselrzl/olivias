import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('jays'); // Replace with your database name
    const data = await db.collection('menuItems').find({}).toArray(); // Replace with your collection name

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
  }
}

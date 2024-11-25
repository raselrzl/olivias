import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; 

export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db('jays'); 
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.set('token', '', { maxAge: 0 });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

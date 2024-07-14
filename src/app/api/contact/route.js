// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(request) {
    try {
        await client.connect();
        const db = client.db('jays');
        const collection = db.collection('contactMessages');
        
        const { name, email, subject, message } = await request.json();
        
        await collection.insertOne({ name, email, subject, message, createdAt: new Date() });
        
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error saving message:', error);
        return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
    } finally {
        await client.close();
    }
}

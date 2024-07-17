import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Here, you would clear the user's session or token.
    // For example, if using cookies, you might clear the cookie like this:
    const response = NextResponse.json({ message: 'Logged out successfully' });
    response.cookies.set('token', '', { maxAge: 0 });
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

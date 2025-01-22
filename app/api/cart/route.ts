import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get('cart');
    const cart = cartCookie ? JSON.parse(cartCookie.value) : [];
    return NextResponse.json(cart);
}

export async function POST(request: Request) {
    const data = await request.json();
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get('cart');
    const cart = cartCookie ? JSON.parse(cartCookie.value) : [];

    cart.push(data);

    cookieStore.set('cart', JSON.stringify(cart), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return NextResponse.json({ success: true });
}

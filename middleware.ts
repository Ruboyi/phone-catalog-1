import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const cartCookie = req.cookies.get('cart');
    const cart = cartCookie ? JSON.parse(cartCookie.value) : [];

    const response = NextResponse.next();
    response.headers.set('X-Cart', JSON.stringify(cart));

    return response;
}

export const config = {
    matcher: ['/((?!_next|api).*)'],
};

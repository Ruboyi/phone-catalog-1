import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    // Leer la cookie del carrito
    const cartCookie = req.cookies.get('cart'); // Devuelve un objeto { name, value }
    const cart = cartCookie ? JSON.parse(cartCookie.value) : [];

    // Hacer disponible el carrito en cada request como un header
    const response = NextResponse.next();
    response.headers.set('X-Cart', JSON.stringify(cart));

    return response;
}

// Configuración opcional: Aplica el middleware solo en rutas específicas
export const config = {
    matcher: ['/((?!_next|api).*)'], // Aplica a todas las rutas excepto `_next` y `api`
};

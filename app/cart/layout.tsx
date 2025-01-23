import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Cart',
    description: 'Cart page',
};

const CartLayout = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
};

export default CartLayout;

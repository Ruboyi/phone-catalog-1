import type { Metadata } from 'next';
import NavBar from './components/NavBar/NavBar';

import './globals.css';

export const metadata: Metadata = {
    title: 'Phone Catalog',
    description: 'Phone catalog made with Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.svg" />
            </head>
            <body>
                <div className="main-container">
                    <NavBar />
                    {children}
                </div>
            </body>
        </html>
    );
}

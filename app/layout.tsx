import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import NavBar from './components/NavBar/NavBar';
import Toast from './components/Toast/Toast';
import './globals.css';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();
    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.svg" />
            </head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <div className="main-container">
                        <NavBar />
                        {children}
                    </div>
                    <Toast />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

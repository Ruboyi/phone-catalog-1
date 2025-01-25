import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
    const defaultLocale = 'es';
    const supportedLocales = ['es', 'en'];

    const requestHeaders = await headers();
    const acceptLanguage = requestHeaders.get('accept-language');

    let locale = defaultLocale;

    if (acceptLanguage) {
        const preferredLocale = acceptLanguage.split(',')[0].split('-')[0];
        if (supportedLocales.includes(preferredLocale)) {
            locale = preferredLocale;
        }
    }

    const messages = (await import(`../messages/${locale}.json`)).default;

    return {
        locale,
        messages,
    };
});

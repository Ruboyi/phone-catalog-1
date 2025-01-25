import PhoneDetails from '@/app/components/PhoneDetails/PhoneDetails';
import { getPhoneById } from '@/app/lib/data';
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }): Promise<Metadata> {
    const id = (await params)?.id.toString();
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: 'ProductPage' });
    const product = await getPhoneById(id);

    if (!product) {
        return {
            title: t('notFound.title'),
            description: t('notFound.description'),
        };
    }

    return {
        title: product.name,
        description: t('productDescription') + product.name,
    };
}

export default async function ProductPage({ params }) {
    const id = (await params)?.id.toString();
    const product = await getPhoneById(id);

    if (!product) {
        notFound();
    }

    return (
        <div>
            <PhoneDetails phone={product} />
        </div>
    );
}

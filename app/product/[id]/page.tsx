import PhoneDetails from '@/app/components/PhoneDetails/PhoneDetails';
import { getPhoneById } from '@/app/lib/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const id = (await params)?.id.toString();
    const product = await getPhoneById(id);

    if (!product) {
        return {
            title: 'Phone Not Found',
            description: 'The phone you are looking for does not exist.',
        };
    }

    return {
        title: product.name,
        description: `Details and specifications of ${product.name}.`,
    };
}

export default async function ProductPage({
    params,
}: {
    params: { id: string };
}) {
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

import { getPhoneById } from '@/app/api/search/route';
import PhoneDetails from '@/app/components/PhoneDetails/PhoneDetails';
import { notFound } from 'next/navigation';

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

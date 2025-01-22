import PhoneCard from './components/PhoneCard/PhoneCard';
import SearchBar from './components/SearchBar/SearchBar';
import { getPhones } from './lib/data';

import { Phone } from './lib/definitons';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Catálogo de Teléfonos',
    description: 'Catálogo de teléfonos móviles',
};

export default async function Home({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const searchValue = (await searchParams)?.query
        ?.toString()
        .toLocaleLowerCase()
        .trim();
    const phones = await getPhones();

    const filteredPhones = searchValue
        ? phones.filter(phone => phone.name.toLowerCase().includes(searchValue))
        : phones;

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <SearchBar searchCount={filteredPhones.length} />

                {phones.length > 0 ? (
                    <div className={styles.phonesContainer}>
                        {filteredPhones.map((phone: Phone) => (
                            <PhoneCard key={phone.id} phone={phone} />
                        ))}
                    </div>
                ) : null}
            </main>
        </div>
    );
}

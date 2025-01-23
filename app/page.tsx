import PhoneCard from './components/PhoneCard/PhoneCard';
import SearchBar from './components/SearchBar/SearchBar';
import { getPhones } from './lib/data';

import { Phone } from './lib/definitons';
import styles from './page.module.css';

export default async function Home({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    // Asegúrate de manejar adecuadamente los tipos de `query`
    const searchValue =
        typeof searchParams?.query === 'string'
            ? searchParams.query.toLowerCase().trim()
            : '';

    // Obtén los datos filtrados
    const phones = await getPhones(searchValue);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <SearchBar searchCount={phones.length} />

                {phones.length > 0 ? (
                    <div
                        className={styles.phonesContainer}
                        data-testid="phones-container"
                    >
                        {phones.map((phone: Phone) => (
                            <PhoneCard key={phone.id} phone={phone} />
                        ))}
                    </div>
                ) : null}
            </main>
        </div>
    );
}

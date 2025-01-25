import { Metadata } from '@playwright/test';
import PhoneCard from './components/PhoneCard/PhoneCard';
import SearchBar from './components/SearchBar/SearchBar';
import { getPhones } from './lib/data';

import { Phone } from './lib/definitons';
import styles from './page.module.css';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: 'HomePage' });

    return {
        title: t('MetaTitle'),
        description: t('MetaDescription'),
    };
}

export default async function Home({ searchParams }) {
    const t = await getTranslations('HomePage');
    const searchValue =
        (await searchParams)?.query?.toString().toLocaleLowerCase().trim() ||
        '';

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

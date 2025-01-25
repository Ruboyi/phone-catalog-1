'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from './SearchBar.module.css';
import { useTranslations } from 'next-intl';

const WAIT_BETWEEN_CHANGE = 300;

export default function SearchBar({ searchCount }) {
    const searchParams = useSearchParams();
    const t = useTranslations('NavBar');

    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`/?${params.toString()}`);
    }, WAIT_BETWEEN_CHANGE);

    return (
        <div className={styles.searchBarContainer}>
            <input
                onChange={event => handleSearch(event.target.value)}
                type="search"
                name="search"
                placeholder={t('searchPlaceholder')}
                autoComplete="off"
                defaultValue={searchParams.get('query')?.toString()}
                className={styles.searchInput}
            />
            <p className={styles.resultsText}>
                {searchCount} {t('searchCount').toLowerCase()}
            </p>
        </div>
    );
}

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from './SearchBar.module.css'; // Importa el archivo CSS Module

const WAIT_BETWEEN_CHANGE = 300;

export default function SearchBar({ searchCount }) {
    const searchParams = useSearchParams();

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
                type="text"
                name="search"
                placeholder="Search for a smartphone..."
                autoComplete="off"
                defaultValue={searchParams.get('query')?.toString()}
                className={styles.searchInput}
            />
            <p className={styles.resultsText}>{searchCount} RESULTS</p>
        </div>
    );
}

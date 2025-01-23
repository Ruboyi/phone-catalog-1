import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test('debe renderizar la barra de búsqueda y el contenedor de teléfonos', async ({
        page,
    }) => {
        await page.goto('/');

        const searchBar = await page.locator('input[type="search"]');
        await expect(searchBar).toBeVisible();

        const phonesContainer = await page.locator(
            '[data-testid="phones-container"]'
        );
        await expect(phonesContainer).toBeVisible();
    });

    test('debe mostrar los teléfonos disponibles', async ({ page }) => {
        await page.goto('/');

        const phoneCards = page.locator('[data-testid="phone-card"]');
        const phoneCount = await phoneCards.count();
        expect(phoneCount).toBeGreaterThan(0);
    });

    test('debe filtrar teléfonos correctamente al usar la barra de búsqueda', async ({
        page,
    }) => {
        await page.goto('/');

        const searchBar = page.locator('input[type="search"]');
        await searchBar.fill('iPhone');
        await expect(searchBar).toHaveValue('iPhone');
        await searchBar.press('Enter');
        await page.waitForTimeout(1000);

        await page.waitForFunction(() => {
            const cards = Array.from(
                document.querySelectorAll('[data-testid="phone-card"]')
            );
            return cards.every(card =>
                card.textContent?.toLowerCase().includes('iphone')
            );
        });

        const phoneCards = await page.locator('[data-testid="phone-card"]');
        const visiblePhones = await phoneCards.allTextContents();

        for (const phoneText of visiblePhones) {
            expect(phoneText.toLowerCase()).toContain('iphone');
        }
    });
});

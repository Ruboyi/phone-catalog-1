import { test, expect } from '@playwright/test';

test.describe('RootLayout', () => {
    test('debe renderizar la barra de navegación y el contenido', async ({
        page,
    }) => {
        await page.goto('/');

        const navBar = await page.locator('nav');
        await expect(navBar).toBeVisible();

        const mainContainer = await page.locator('.main-container');
        await expect(mainContainer).toBeVisible();
    });

    test('tiene el título y la descripción correctos', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle('Phone Catalog');
        const metaDescription = await page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute(
            'content',
            'Phone catalog made with Next.js'
        );
    });
});

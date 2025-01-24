import { test, expect } from '@playwright/test';

test.describe('PhoneDetails Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/product/SMG-A25');
    });

    test('debería mostrar la información básica del teléfono', async ({
        page,
    }) => {
        const title = page.locator('[data-testid="product-title"]');
        await expect(title).toBeVisible();

        const price = page.locator('[data-testid="product-price"]');
        await expect(price).toContainText('EUR');
    });

    test('debería permitir seleccionar un tamaño de almacenamiento', async ({
        page,
    }) => {
        const storageOption = page.locator('[data-testid="storage-option-1"]');
        await storageOption.click();
        await expect(storageOption).toHaveClass(/active/);
    });
});

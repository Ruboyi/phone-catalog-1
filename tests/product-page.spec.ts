import { test, expect } from '@playwright/test';

test.describe('PhoneDetails Component', () => {
    test.beforeEach(async ({ page }) => {
        // Navegar a la página donde está el componente PhoneDetails
        await page.goto('/product/SMG-A25'); // Cambia la URL según tu configuración local
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

    test('debería permitir seleccionar un color', async ({ page }) => {
        const colorOption = page.locator(
            '[data-testid="color-option-#ff0000"]'
        ); // Cambia el código del color según tu data
        await colorOption.click();

        const selectedColorName = page.locator(
            '[data-testid="selected-color-name"]'
        );
        await expect(selectedColorName).toBeVisible();
    });

    //   test('debería agregar el producto al carrito', async ({ page }) => {
    //     const addToCartButton = page.locator('[data-testid="add-to-cart-button"]');
    //     await addToCartButton.click();
    //     await expect(addToCartButton).toBeDisabled();
    //   });
});

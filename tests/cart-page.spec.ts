import { test, expect } from '@playwright/test';

test.describe('Cart Component', () => {
    test('debe renderizar el carrito correctamente con el número de artículos', async ({
        page,
    }) => {
        await page.goto('/cart');

        const header = await page.locator('header');
        await expect(header).toHaveText('Cart (0)');

        const cartItems = await page.locator('[data-testid="cart-item"]');
        await expect(cartItems).toHaveCount(0);

        const payButton = await page.locator('button', { hasText: 'Pay' });
        await expect(payButton).toBeHidden();
    });
});

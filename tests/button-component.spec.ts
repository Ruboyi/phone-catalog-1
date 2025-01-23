import { test, expect } from '@playwright/test';

test.describe('Button Component', () => {
    test('debe renderizar correctamente con el texto proporcionado', async ({
        page,
    }) => {
        // Renderizar el botón con texto "Click Me"
        await page.setContent(`
            <div id="root"></div>
            <script type="module">
                import React from 'react';
                import ReactDOM from 'react-dom';
                import Button from './Button';

                const root = document.getElementById('root');
                ReactDOM.render(
                    React.createElement(Button, null, 'Click Me'),
                    root
                );
            </script>
        `);

        const button = await page.locator('button');
        await expect(button).toHaveText('Click Me');
    });

    test('debe añadir una clase CSS específica al recibir el prop outline', async ({
        page,
    }) => {
        // Renderizar el botón con la propiedad outline
        await page.setContent(`
            <div id="root"></div>
            <script type="module">
                import React from 'react';
                import ReactDOM from 'react-dom';
                import Button from './Button';

                const root = document.getElementById('root');
                ReactDOM.render(
                    React.createElement(Button, { outline: true }, 'Outline Button'),
                    root
                );
            </script>
        `);

        const button = await page.locator('button');
        await expect(button).toHaveClass(/outline/);
    });

    test('debe ejecutar la función onClick correctamente', async ({ page }) => {
        // Simular un evento onClick
        await page.setContent(`
            <div id="root"></div>
            <script type="module">
                import React from 'react';
                import ReactDOM from 'react-dom';
                import Button from './Button';

                const handleClick = () => {
                    const output = document.createElement('p');
                    output.id = 'output';
                    output.innerText = 'Button clicked';
                    document.body.appendChild(output);
                };

                const root = document.getElementById('root');
                ReactDOM.render(
                    React.createElement(Button, { onClick: handleClick }, 'Click Me'),
                    root
                );
            </script>
        `);

        const button = await page.locator('button');
        await button.click();

        const output = await page.locator('#output');
        await expect(output).toHaveText('Button clicked');
    });

    test('debe aplicar clases adicionales pasadas en el prop className', async ({
        page,
    }) => {
        // Renderizar el botón con una clase personalizada
        await page.setContent(`
            <div id="root"></div>
            <script type="module">
                import React from 'react';
                import ReactDOM from 'react-dom';
                import Button from './Button';

                const root = document.getElementById('root');
                ReactDOM.render(
                    React.createElement(Button, { className: 'custom-class' }, 'Custom Class Button'),
                    root
                );
            </script>
        `);

        const button = await page.locator('button');
        await expect(button).toHaveClass(/custom-class/);
    });
});

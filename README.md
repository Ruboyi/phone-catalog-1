# Phone Catalog

Este proyecto es una aplicación de catálogo de teléfonos. A continuación, se detallan los pasos para levantar el proyecto y la configuración necesaria.

## Notas del Desarrollador

Esta aplicación fue desarrollada como parte de una **prueba técnica** para demostrar conocimientos de desarrollo web con **Next.js** y **TypeScript**. A continuación, detallo algunas de las decisiones tomadas durante el desarrollo:

-   **Uso de SSR**: Se evitó al máximo el uso del lado del cliente para garantizar que la mayor parte del contenido se genere en el servidor, aprovechando las capacidades de Server-Side Rendering (SSR) que ofrece Next.js.
-   **Zustand en lugar de Context API**: Para la gestión del estado del carrito, se optó por **Zustand**. Esto evita envolver toda la aplicación con un Context Provider y permite mantener el soporte para SSR.

-   **Pruebas básicas**: Aunque en un proyecto real se habrían implementado pruebas más elaboradas, para esta prueba técnica se desarrollaron pruebas básicas para demostrar las capacidades de testing.

## Requisitos

-   Node.js
-   npm o yarn

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/phone-catalog.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd phone-catalog
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
    o si usas yarn:
    ```bash
    yarn install
    ```

## Configuración

Antes de iniciar el proyecto, necesitas crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
NEXT_PUBLIC_API_URL=https://prueba-tecnica-api-tienda-moviles.onrender.com
NEXT_PUBLIC_API_KEY=87909682e6cd74208f41a6ef39fe4191
```

## Ejecución

Para levantar el proyecto en modo desarrollo, ejecuta:

```bash
npm run dev
```

o si usas yarn:

```bash
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Construcción

Para construir el proyecto para producción, ejecuta:

```bash
npm run build
```

o si usas yarn:

```bash
yarn build
```

## Despliegue

Para desplegar el proyecto, sigue las instrucciones de tu plataforma de despliegue preferida.

## Contribución

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Estructura del Proyecto

### **Carpetas principales**

-   **`.next`**

    -   Carpeta generada automáticamente por Next.js durante el proceso de compilación y construcción. Contiene los archivos de salida optimizados y cacheados para producción.
    -   No es necesario modificar esta carpeta directamente.

-   **`app/cart`**

    -   Contiene la página del carrito de compras:
        -   `Cart.module.css`: Estilos específicos del carrito.
        -   `page.tsx`: Archivo principal de la página del carrito, implementado como una ruta de Next.js.

-   **`components`**

    -   Contiene componentes reutilizables de la aplicación:
        -   **`Button`**: Componente reutilizable para botones.
        -   **`CartCard`**: Representa un ítem dentro del carrito de compras.
        -   **`NavBar`**: Barra de navegación utilizada en la aplicación.
        -   **`PhoneCard`**: Tarjetas que muestran detalles de los productos tipo "teléfonos".
        -   **`PhoneDetails`**: Componente que muestra información detallada sobre un teléfono.
        -   **`SearchBar`**: Barra de búsqueda para filtrar productos.

-   **`lib`**

    -   Contiene utilidades y configuraciones de soporte para el proyecto:
        -   `axios.instance.ts`: Configuración centralizada de Axios para realizar solicitudes HTTP.
        -   `data.ts`: Contiene llamadas a la api
        -   `definitions.ts`: Define interfaces y tipos globales para TypeScript, asegurando una tipificación robusta.

-   **`store`**

    -   Maneja el estado global y las configuraciones de la aplicación:
        -   `cartStore.ts`: Archivo donde se gestiona el estado del carrito utilizando alguna librería de manejo de estado como Zustand o Context API.
        -   `globals.css`: Estilos globales aplicados en toda la aplicación.
        -   `layout.tsx`: Define la estructura común que se aplica a las páginas de la aplicación.
        -   `page.tsx`: Página principal del proyecto.
        -   `page.module.css`: Estilos específicos para la página principal.

-   **`node_modules`**

    -   Carpeta generada automáticamente para gestionar dependencias del proyecto. No se modifica manualmente.

-   **`public`**

    -   Contiene recursos públicos como imágenes, fuentes y otros archivos estáticos. Estos archivos están accesibles directamente desde la raíz del dominio.

-   **`tests`**
    -   Carpeta dedicada a las pruebas automatizadas del proyecto:
        -   `cart-page.spec.ts`: Pruebas específicas para la página del carrito.
        -   `home-layout.spec.ts`: Pruebas relacionadas con el diseño de la página principal.
        -   `product-page.spec.ts`: Pruebas para la página de productos.
        -   `root-layout.spec.ts`: Pruebas para verificar la estructura general del proyecto.

---

## Archivos clave

-   **`.env`**

    -   Archivo para manejar variables de entorno, como claves de API o configuraciones sensibles. Este archivo debe estar en `.gitignore` para proteger información confidencial.

-   **`.gitattributes`**
    -   Archivo utilizado para configurar cómo Git maneja archivos específicos, como establecer reglas de formato o gestión de binarios.

---

## Funcionalidad destacada

1. **Modularidad**:

    - Los componentes están organizados por funcionalidad, facilitando su mantenimiento y reutilización.

2. **Estado Global**:

    - El estado del carrito se centraliza en `store/cartStore.ts` para simplificar la gestión de datos entre componentes.

3. **Pruebas**:

    - La carpeta `tests` incluye pruebas automatizadas para garantizar la calidad y estabilidad del código.

4. **API Centralizada**:
    - `lib/axios.instance.ts` proporciona una configuración común para manejar las llamadas a la API, asegurando consistencia y reutilización.

---

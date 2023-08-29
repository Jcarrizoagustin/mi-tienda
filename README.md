# Mi Tienda

[![Netlify Status](https://api.netlify.com/api/v1/badges/02566f48-5f4e-491e-98b9-7952b9dcfcec/deploy-status)](https://app.netlify.com/sites/mitiendabebidas/deploys)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

_Este pequeño proyecto tiene como único fin poner en prática y demostrar mis conocimientos en React._

Mi tienda es una pequeña aplicacion web creada con React, inspirada en la [tienda](https://diaonline.supermercadosdia.com.ar/) de Dia, que simula el proceso de compra de productos, en este caso bebidas.

## Características

- Agregar un producto al carrito por unidad o cantidad.
- Incrementar la cantidad de un producto en el carrito.
- Eliminar un producto del carrito.
- Eliminar todos los productos del carrito.
- Solo se permitirá acceder al pago cuando el importe supere los $2000.

## Conceptos puestos en práctica

- Uso de useState, useReducer y useContext para el manejo del estado.
- Custom Hooks para el carrito y la cantidad de productos.
- Renderizado condicional.
- CSS modules.

## Tecnologías

- [React](https://es.react.dev/) - Libreria de desarrollo
- [React Hot Toast](https://es.react.dev/) - Libreria de notificaciones
- [IconScout](https://iconscout.com/) - Libreria de iconos

## Instalación

Requiere [Node.js](https://nodejs.org/) para funcionar.

Instale las dependencies e inicie el servidor de desarrollo.

```sh
cd mi-tienda
npm install
npm run dev
```

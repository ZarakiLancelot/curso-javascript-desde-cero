# ¿Dónde corre JavaScript?

JavaScript puede ejectuarse en diferentes contextos:

---

## En el navegador

Cada navegador moderno (Chrome, Firefox, Edge, Safari, Opera) tiene su propio motor de JavaScript. Ejemplos:

- Chrome / Edge / Opera: [V8](https://v8.dev/)
- Firefox: [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey)
- Edge (Antiguo): [Chakra](https://learn.microsoft.com/en-us/cpp/cpp/what-is-chakra)
- Safari: [JavaScriptCore](https://trac.webkit.org/wiki/JavaScriptCore)
- Opera (Antiguo): [Chromium](https://www.chromium.org/)

Allí se usa principalmente para:

- Manipular el DOM (Document Object Model) de la página web.
- Interactuar con el usuario, como responder a eventos (clics, teclados, scroll, etc.).
- Realizar cálculos y operaciones matemáticas.
- Hacer peticiones HTTP y manejar la respuesta.
- Implementar lógica de autenticación y autorización.
- Realizar animaciones y efectos de pantalla.
- Crear aplicaciones web dinámicas y interactivas.
- Integrar con otros servicios y APIs.
- Desarrollar juegos y aplicaciones móviles.

Se ejecuta dentro de la pestaña del navegador, por lo que tiene acceso a la interfaz del navegador y a la API de JavaScript, en un entorno seguro y controlado por el navegador (sandbox), si acceso directo al sistema de archivos del usuario (por seguridad). Ejemplo:

```javascript
// Ejemplo de código JavaScript ejecutado en el navegador
console.log("¡Hola, mundo!");
```

---

## En Node.js

Es un entorno fuera del navegador, creado en 2009. Está basado en el motor V8 de Google (el mismo de Chrome), Permite usar JavaScript para el backend:

- Acceder a archivos del sistema (`fs`).
- Crear servidores web (`http`, `express`, `http-server`).
- Conectarse a bases de datos.
- Automatizar tareas.
- Desarrollar aplicaciones de escritorio.

Node no tiene un DOM ni ventanas porque no hay navegador, solo un objeto global llamado `global` que es el mismo objeto global del navegador. Ejemplo:

En una terminal con Node instalado:

```bash
node
```

y luego ejecutar:

```javascript
console.log("¡Hola, mundo desde Node.js!");
```

## RESUMEN

- En el navegador, JavaScript sirve para hacer las páginas interactivas.
- En Node.js, JavaScript sirve para programar en el servidor o ejecutar scripts en la terminal de la computadora.
- Ambos usan el mismo lenguaje, pero tienen APIs diferentes, en el navegador con acceso al DOM, y Node te da acceso al sistema de archivos y servidores.

---
---

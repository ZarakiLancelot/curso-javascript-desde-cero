# Interacciones simples con el DOM

El **DOM (Document Object Model)** es la representación en memoria de la página web, es el gráfico o árbol de elementos que se generan a través de todo el sitio. Con JavaScript podemos **seleccionar elementos, escuchar eventos y modificar su contenido**.

---

## 1. Selección de elementos (`querySelector`)

`document.querySelector` permite seleccionar un elemento usando **selectores CSS** (`#id`, `.clase`, `tag`). Por ejemplo tenemos este HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1 id="title">Hola JS</h1>
  <button id="btn">Cambiar título</button>
</body>
</html>
```

Y luego en nuestro archivo JavaScript este código:

```javascript
const title = document.querySelector("#title");   // Selecciona el h1
const btn = document.querySelector("#btn");       // Selecciona el botón

console.log(title.textContext);                   // "Hola JS"
```

**Tip:** Si hay varios elementos y quieres todos, usa `querySelectorAll`.

## 2. Manejo de eventos (`addEventListener`)

Podemos escuchar eventos como `click`, `input`, `submit`, `keydown`, etc.

```javascript
btn.addEventListener("click", () => {
  console.log("¡Se hizo click en el botón!");
});
```

Cada vez que el usuario hace click en el botón, se ejecuta la función.

## 3. Modificación de contenido (`textContent`)

Con `textContent` podemos cambiar el texto de un elemento.

```javascript
btn.addEventListener("click", () => {
  title.textContent = "¡Título actualizado!";
});
```

Después del click, el `<h1>` cambia su texto. Veamos el ejemplo completo:

HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo</title>
  <script defer src="app.js"></script>
</head>
<body>
  <h1 id="title">Hola JS</h1>
  <button id="btn">Cambiar título</button>
</body>
</html>
```

JS

```javascript
const title = document.querySelector('#title');
const button = document.querySelector('#btn');

button.addEventListener("click", () => {
  title.textContent = "¡Título actualizado!";
  console.info("Título modificado");
});
```

## RESUMEN

- `querySelector` selecciona elementos del DOM.
- `addEventListener` escucha eventos del usuario al interactuar con elementos del DOM.
- `textContent` modifica el texto de un elemento.

Con este pequeño ejemplo nos damos cuenta de la interacción entre todos los componentes en una página dinámica.

---
---

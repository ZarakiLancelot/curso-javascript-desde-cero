# Preparando el entorno

## 1. Creación de un archivo HTML mínimo

Todo proyecto web necesita al menos un archivo **HTML** que actúe como estructura base. Ejemplo de esqueleto mínimo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Configuration Setup</h1>
</body>
</html>
```

Explicación breve:

- `<!DOCTYPE html>`: indica que usamos HTML5.
- `<html lang="es">`: idioma de la página o sitio.
- `<head>`: información sobre la página (configuración, título, enlaces a CSS/JS).
- `<body>`: contenido que verá el usuario en pantalla.

En editores de texto como VSCode se puede colocar en un archivo guardado con extensión `.html`, `!!!` y esto generará el esqueleto básico.

## 2. Vinculación de CSS y JavaScript

Un buen hábito es separar el HTML (estructura), CSS (estilos) y JavaScript (lógica).

- Para el **CSS** usamos `<link>`:

  ```html
  <link rel="stylesheet" href="styles.css">
  ```

- Para el **JavaScript** usamos `<script>`:

  ```html
  <script defer src="app.js"></script>
  ```

  De esta forma, tendremos una carpeta con 3 archivos básicos:

  ```bash
  project/
  |-- index.html
  |-- styles.css
  |-- app.js
  ```

## 3. Uso de `<script defer>`para evitar bloquear el render

El navegador carga la página de arriba a abajo:

- Si encuentra un `<script>`normal en el `<head>`, se detiene el renderizado hasta que termine de descargar y ejectuar ese script -> la página se siente más lenta.
- Con `defer`, el script se descarga en paralelo pero **solo se ejecuta después de que el HTML ya fue leído** -> la página carga más rápido y sin bloqueos.

```html
<!-- Forma correcta (recomendada)-->
<script defer src="app.js"></script>
```

Alternativa (menos usada ahora) es poner el `<script>`justo antes de la etiqueta que cierra el body (`</body>`). Con `defer` no es necesario moverlo, se mantiene en el `<head>` bien organizado todo.

## RESUMEN

- El **HTML mínimo** te da la estructura de la página.
- El **CSS** da estilo y presentación.
- El **JavaScript** da lógica e interactividad.
- Usar `defer` en el script evita que la página se congele mientras carga el JavaScript.

---
---

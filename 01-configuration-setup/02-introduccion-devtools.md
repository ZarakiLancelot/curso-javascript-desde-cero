# Introducción a DevTools

Las **DevTools** (herramientas de desarrollo) son un conjunto de utilidades incluidas en los navegadores modernos. Se abren con la tecla `F12` o `Ctrl + Shift + I` (`CMD + Option + I` en macOS) o bien hacer clic derecho en cualquier parte de la pantalla y luego seleccionar la opción `Inspeccionar`.

---

## 1. Console

La pestaña **Console** es la que permite ejecutar e interactuar directamente con código JavaScript:

- Ver mensajes (`console.log`, `console.error`, `console.warn`, `console.info`).
- Probar fragmentos de código al vuelo.
- Inspeccionar valores y variables.
- Ver errores y advertencias que ocurren en la página.

Ejemplo:

```javascript
console.log('Hola, mundo!');
console.error('¡Algo salió mal, por favor revisa el Error!');
console.warn('Esto es una advertencia!');
console.info('Información.');
```

## 2. Elements

La pestaña **Elements** permite inspeccionar y modificar el **HTML** y **CSS** de la página en tiempo real:

- Ver la estructura del DOM.
- Editar texto, atributos o estilos directamente.
- Probar cambios de diseño sin modificar los archivos.
- Observar cómo el navegador interpreta el HTML.

## 3. Sources (breakpoints)

La pestaña **Sources** sirve para depurar el código JavaScript:

- Ver todos los archivos cargados en la página.
- Colocar **breakpoints** (puntos de parada en el código) para inspeccionar paso a paso.
- Ejecutar el código paso a paso (_Step over_, _Step into_, _Step out_).
- Revisar variables en tiempo real con la sección **Watch**.
- Ver el **Call Stack** (pila de llamadas).

## 4. Network

La pestaña **Network** muestra todas las solicitudes de red que hace la página.

- Ver qué archivos se descargan (HTML, CSS, JS, imágenes).
- Analizar tiempos de carga y caché.
- Observar las peticiones HTTP (método, URL, cabeceras, respuesta).
- Filtrar por tipo de recurso (JS, CSS, imágenes, fetch/XHR).

## RESUMEN

- **Console**: mensajes y pruebas rápidas.
- **Elements**: inspección y edición de HTML/CSS.
- **Sources**: depuración con breakpoints.
- **Network**: análisis de peticiones y rendimiento.

---
---

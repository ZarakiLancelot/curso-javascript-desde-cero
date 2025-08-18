# Clase 1 · Ejercicios

## Ejercicio guiado: Saludar

1. Agrega el event listener al botón **Saludar**.
2. Obtén y recorta el valor del input: `const name = nameInput.value.trim()`.
3. Coloca un **breakpoint** en la línea del `alert`.
4. Muestra el saludo: `alert('Hola, ' + (name || 'mundo'))`.

> Verifica en DevTools que el breakpoint se active y revisa el valor de `name` en *Watch*.

## Ejercicio libre: Contador

1. Declara `let clicks = 0;`.
2. En el botón **Contar**, incrementa el número de `clicks` y actualiza `#count` con `textContent`.
3. (Opcional) Muestra un `console.info` por cada incremento.

### Extras (opcionales)

- Deshabilita el botón al llegar a 10 clicks.
- Cambia de color el número en múltiplos de 5.
- Muestra un mensaje cuando el contador llegue a 20.

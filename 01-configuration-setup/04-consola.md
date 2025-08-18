# Primeros pasos con la consola

La **consola** es tu primera aliada al aprender JavaScript. Permite imprimir valores, ver errores y depurar código.

---

## 1. Uso de `console.*`

JavaScript tiene varios métodos para mostrar mensajes:

```javascript
console.log("mensaje normal");      // Información general
console.info("Información extra");  // Mensajes informativos
console.warn("¡Advertencia!");      // Algo no crítico, pero a considerar
console.error("Error Grave!");      // Problemas que requieren atención.
```

**Tip:** Usar diferentes niveles ayuda a organizar los mensajes durante el desarrollo.

## 2. Lectura e interpretación de errores comunes

`Uncaught ReferenceError` sucede cuando intentas usar una variable que **no existe** o no fue declarada previamente.

```javascript
console.log(name);
```

Error en consola:

```javascript
Uncaught ReferenceError: name is not defined
```

¿Cómo resolverlo?

- Verifica que la variable esté declarada ya sea con `let`, `const` o `var`.
- Revisa si el nombre está bien escrito (mayúsculas/minúsculas importan) ya que JavaScript es `case-sensitive`.

---

`TypeError`, este ocurre cuando intentas usar un método o propiedad sobre algo que **no lo soporta**.

```javascript
const btn = document.querySelector("#no-existe");
btn.addEventListener("click", () => console.log("Click"));
```

Error en consola:

```javascript
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
```

¿Cómo resolverlo?

- Verifica que el `id` o selector existe en HTML.
- Asegúrate de usar `defer` para que el DOM ya esté cargado.

## 3. Colocación y uso de breakpoints

Los **breakpoints** permiten detener la ejecución del código en un punto específico.

Pasos:

1. Abre DevTools -> pestaña **Sources**.
2. Busca el archivo `app.js`.
3. Haz clic en el número de línea donde quieres detener el código.
4. Recarga la página o ejectua la acción que dispara ese código.
5. Observa cómo la ejecución se pausa en el punto exacto donde colocaste el breakpoint.

En la parte derecha verás:

- Variables locales: valores actuales.
- Watch: expresiones personalizadas que quieres monitorear.
- Call stack: de dónde viene la ejecución.

Controles principales:

- ▶ Resume -> continuar ejecución.
- ⏭ Step over (`F10`) -> ejecutar línea sin entrar en funciones.
- ⬇ Step into -> entrar en la función llamada.
- ⬆ Step out -> salir de la función actual.

## RESUMEN

- Usa `console.*` para depurar de forma organizada y rápida.
- Aprende a leer errores:
  - ReferenceError = variable inexistente.
  - TypeError = propiedad/método no válido en ese tipo de dato.
- Los breakpoints son clave para entender **qué pasa en cada paso lógico**.

---
---

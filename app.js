// App de ejercicios - Starter
console.log("App cargada");

// --- Selecciones del DOM ---
const nameInput = document.querySelector("#nameInput");
const btnGreet = document.querySelector("#greetButton");
const btnCount = document.querySelector("#countButton");
const countSpan = document.querySelector("#clickCount");

// --- Ejercicio guiado ---
// TODO: Agrega aquí el event listener del botón 'Saludar'.
// 1) Obtén el nombre con nameInput.value.trim()
// 2) Coloca un breakpoint en la línea del alert
// 3) Muestra: alert('Hola, ' + (name || 'mundo'))

btnGreet.addEventListener("click", () => {
  const name = nameInput.value.trim();
  // 🔴 Breakpoint sugerido: coloca un breakpoint en la siguiente línea
  alert("Hola, " + (name || "mundo"));
});

// --- Ejercicio libre: contador de clicks ---
let clicks = 0;
// TODO: En cada click en btnCount, incrementa 'clicks' y actualiza countSpan.textContent
// Sugerencia: console.info('Clicks:', clicks);
btnCount.addEventListener("click", () => {
  clicks += 1;
  countSpan.textContent = String(clicks);
  console.info("Clicks:", clicks);
});
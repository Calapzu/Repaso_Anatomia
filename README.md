# 🐾 Anatomía Canina — App de Estudio

Aplicación web para estudiar los músculos del perro con sus respectivas inervaciones y funciones, usando el método de **repetición espaciada**.

Desarrollada con HTML, CSS y JavaScript puro. Sin frameworks, sin instalación, funciona desde cualquier celular o computador.

---

## ✨ Funciones

- **Modo estudio completo** — repasa todos los músculos pendientes del día
- **5 preguntas rápidas** — repaso aleatorio sin guardar progreso
- **Pistas progresivas** — si no recuerdas, pide una pista (hasta 4 niveles)
- **Corrección inteligente** — acepta variaciones de tildes y mayúsculas
- **Repetición espaciada** — los músculos que fallas vuelven más pronto, los que dominas se alejan
- **Progreso guardado** — el avance se guarda en el navegador automáticamente
- **100% responsive** — funciona en celular, tablet y computador

---

## 📚 Contenido

La app incluye **96 músculos** organizados por región:

| Región | Ejemplos |
|---|---|
| Miembro torácico | Bíceps braquial, Tríceps braquial, Deltoides... |
| Miembro pélvico | Gastrocnemio, Cuádriceps femoral, Glúteo medio... |
| Cabeza | Masetero, Temporal, Orbicular de los párpados... |
| Cuello | Braquiocefálico, Esternohioideo, Escaleno... |
| Tronco y abdomen | Trapecio, Dorsal ancho, Diafragma... |
| Dorso y pelvis | Longísimo del dorso, Multífido, Elevador de la cola... |

Cada músculo incluye:
- Nombre completo
- Región anatómica
- Ubicación detallada
- Descripción
- Inervación
- Función

---

## 🚀 Cómo usar

1. Abre el link de la app
2. En la pantalla de inicio verás cuántos músculos tienes pendientes hoy
3. Elige **Sesión de estudio** o **5 preguntas rápidas**
4. Lee las ayudas (región, ubicación, descripción) e intenta escribir el nombre, la inervación y la función
5. Si no recuerdas, usa el botón **Pedir pista**
6. Recibe feedback inmediato con la corrección
7. ¡Repite hasta dominarlos todos!

---

## 🧠 Sistema de repetición espaciada

| Situación | Cuándo vuelve |
|---|---|
| Fallas el músculo | Al día siguiente |
| 1 acierto seguido | En 1 día |
| 2 aciertos seguidos | En 2 días |
| 3+ aciertos seguidos | En 3-7 días |
| Dominado (3+ aciertos) | Se muestra en la pantalla de progreso como ✓ |

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla)
- localStorage para guardar el progreso

---

## 📁 Estructura del proyecto
anatomia-canina/
├── index.html    → estructura de la app
├── style.css     → diseño y estilos
└── script.js     → lógica, datos y repetición espaciada

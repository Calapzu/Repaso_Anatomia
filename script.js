// ============================================================
// BASE DE DATOS DE MÚSCULOS
// ============================================================
const musculos = [
    {"nombre": "orbicular de la boca", "region": "cabeza", "ubicacion": "facial", "inervacion": "nervio facial", "funcion": "no funcion"},
    {"nombre": "bocinador", "region": "cabeza", "ubicacion": "facial", "inervacion": "nervio facial", "funcion": "colabora en masticar"},
    {"nombre": "elevador nasolabial", "region": "cabeza", "ubicacion": "facial", "inervacion": "nervio facial", "funcion": "no funcion"},
    {"nombre": "elevador del labio superior", "region": "cabeza", "ubicacion": "facial", "inervacion": "nervio facial", "funcion": "eleva el labio superior"},
    {"nombre": "canino", "region": "cabeza", "ubicacion": "facial", "inervacion": "nervio facial", "funcion": "eleva el labio superior"},
    {"nombre": "cigomatico", "region": "cabeza", "ubicacion": "facial", "inervacion": "nervio facial", "funcion": "mueve rostralmente el cartilago"},
    {"nombre": "orbicular del ojo", "region": "cabeza", "ubicacion": "parpados", "inervacion": "nervio palpebral", "funcion": "contrae y cierra el ojo"},
    {"nombre": "retractor del angulo lateral del ojo", "region": "cabeza", "ubicacion": "parpados", "inervacion": "nervio palpebral", "funcion": "retrae el angulo lateral del ojo"},
    {"nombre": "elevador medial del ojo", "region": "cabeza", "ubicacion": "parpados", "inervacion": "nervio frontal", "funcion": "actua desde el angulo medial del ojo"},
    {"nombre": "elevador del parpado superior", "region": "cabeza", "ubicacion": "parpados", "inervacion": "nervio oculomotor", "funcion": "eleva el parpado superior"},
    {"nombre": "frontal", "region": "cabeza", "ubicacion": "parpados", "inervacion": "nervio frontal", "funcion": "eleva el parpado superior"},
    {"nombre": "temporal", "region": "cabeza", "ubicacion": "masticadores", "inervacion": "nervio mandibular", "funcion": "eleva la mandibula"},
    {"nombre": "maasetero", "region": "cabeza", "ubicacion": "masticadores", "inervacion": "nervio mandibular", "funcion": "eleva la mandibula"},
    {"nombre": "pterigoides", "region": "cabeza", "ubicacion": "masticadores", "inervacion": "nervio mandibular", "funcion": "eleva la mandibula"},
    {"nombre": "digastrico", "region": "cabeza", "ubicacion": "masticadores", "inervacion": "nervio facial", "funcion": "abre la boca"},
    {"nombre": "retractor del globo ocular", "region": "cabeza", "ubicacion": "extrinsecos globo ocular", "inervacion": "nervio abducente", "funcion": "retrae el globo ocular"},
    {"nombre": "recto (dorsal, ventral, lateral medial)", "region": "cabeza", "ubicacion": "extrinsecos globo ocular", "inervacion": "nervio abducente", "funcion": "giro del ojo"},
    {"nombre": "orbicular dorsal", "region": "cabeza", "ubicacion": "extrinsecos globo ocular", "inervacion": "nervio oculomotor", "funcion": "giro del ojo"},
    {"nombre": "orbicular ventral", "region": "cabeza", "ubicacion": "extrinsecos globo ocular", "inervacion": "nervio facial", "funcion": "giro del ojo"},
    {"nombre": "trapecio cervical", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervio accesorio", "funcion": "eleva el hombro cranealmente"},
    {"nombre": "trapecio toracico", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervio accesorio", "funcion": "eleva el hombro caudalmente"},
    {"nombre": "cleidocefalico", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "ramas ventrales de los nervios cervicales y nervio braquial", "funcion": "desplaza cabeza y cuello"},
    {"nombre": "braquiocefalo", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervio braquiocefalico", "funcion": "no funcion"},
    {"nombre": "cleidobraquial", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervio braquiocefalico", "funcion": "extensor del hombro y brazo"},
    {"nombre": "omotransverso", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervio accesorio", "funcion": "adelanta el hombro"},
    {"nombre": "dorsal ancho", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervio toracodorsal", "funcion": "desplaza el miembro y flexiona el hombro"},
    {"nombre": "PS pectorales descendente", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervios pectorales craneales", "funcion": "permite la locomocion"},
    {"nombre": "PS pectoral transverso", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervios pectorales craneales", "funcion": "aduce el miembro"},
    {"nombre": "pectoral profundo", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervios pectorales caudales", "funcion": "permite la locomocion"},
    {"nombre": "Romboides", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "ramas ventrales de los nervios cervicales y toracicos", "funcion": "eleva y retrae el miembro"},
    {"nombre": "romboide cervical", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "ramas ventrales de los nervios cervicales y toracicos", "funcion": "eleva el cuello cuando esta fijo"},
    {"nombre": "romboide toracico", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "ramas ventrales de los nervios cervicales y toracicos", "funcion": "eleva y retrae el miembro"},
    {"nombre": "serrato ventral toracico", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "nervio toracico largo", "funcion": "suspensor del tronco"},
    {"nombre": "serrato ventral cervical", "region": "Miembro torácico", "ubicacion": "torax", "inervacion": "ramas ventrales de los nervios cervicales", "funcion": "no funcion"},
    {"nombre": "supraespinoso", "region": "Miembro torácico intrinsecos", "ubicacion": "hombro lateral", "inervacion": "nervio subescapular", "funcion": "extensor del hombro y brazo"},
    {"nombre": "infraespinoso", "region": "Miembro torácico intrinsecos", "ubicacion": "hombro lateral", "inervacion": "nervio subescapular", "funcion": "flexor y extensor del hombro, abductor del brazo"},
    {"nombre": "deltoides", "region": "Miembro torácico intrinsecos", "ubicacion": "hombro lateral", "inervacion": "nervio axial", "funcion": "flexor art."},
    {"nombre": "redondo menor", "region": "Miembro torácico intrinsecos", "ubicacion": "hombro lateral", "inervacion": "nervio axial", "funcion": "flexor hombro"},
    {"nombre": "subescapular", "region": "Miembro torácico intrinsecos", "ubicacion": "hombro medial", "inervacion": "nervio subescapular", "funcion": "aductor del brazo, flexor y extensor del hombro"},
    {"nombre": "coracobraquial", "region": "Miembro torácico intrinsecos", "ubicacion": "hombro medial", "inervacion": "nervio musculo cutaneo", "funcion": "aductor del brazo, flexor y extensor del hombro"},
    {"nombre": "redondo mayor", "region": "Miembro torácico intrinsecos", "ubicacion": "hombro medial", "inervacion": "nervio axial", "funcion": "aductor del brazo, flexor y extensor del hombro"},
    {"nombre": "braquial", "region": "miembro toracico", "ubicacion": "art codo craneal", "inervacion": "nervio musculocutaneo", "funcion": "flexor de la art codo"},
    {"nombre": "biceps braquial", "region": "miembro toracico", "ubicacion": "art codo craneal", "inervacion": "nervio musculocutaneo", "funcion": "flexor hombro y fija el mismo."},
    {"nombre": "triceps braquial", "region": "miembro toracico", "ubicacion": "art codo caudal", "inervacion": "nervio radial", "funcion": "extiende y fija el codo"},
    {"nombre": "anconeo", "region": "miembro toracico", "ubicacion": "art codo caudal", "inervacion": "nervio radial", "funcion": "extiende el codo"},
    {"nombre": "tensor de la fascia del antebrazo", "region": "miembro toracico", "ubicacion": "art codo caudal", "inervacion": "nervio radial", "funcion": "extiende el codo y tensa la fascia del antebrazo"},
    {"nombre": "braquiradial", "region": "miembro toracico", "ubicacion": "supinadores", "inervacion": "nervio radial", "funcion": "rotador y extensor del radio"},
    {"nombre": "supinador", "region": "miembro toracico", "ubicacion": "supinadores", "inervacion": "nervio radial", "funcion": "rotador y extensor del radio"},
    {"nombre": "pronador redondo", "region": "miembro toracico", "ubicacion": "pronadores", "inervacion": "nervio medial", "funcion": "rotador interno del radio"},
    {"nombre": "pronador cuadrado", "region": "miembro toracico", "ubicacion": "pronadores", "inervacion": "nervio medial", "funcion": "rotador interno del radio"},
    {"nombre": "extensor carpo radial", "region": "carpos y dedos", "ubicacion": "carpos y dedos extensor vista lateral", "inervacion": "nervio radial", "funcion": "extiende y flexiona el codo"},
    {"nombre": "extensor digital comun", "region": "carpos y dedos", "ubicacion": "carpos y dedos extensor vista lateral", "inervacion": "nervio radial", "funcion": "extiende el carpo t art de los cuatro dedos"},
    {"nombre": "extensor digital lateral", "region": "carpos y dedos", "ubicacion": "carpos y dedos extensor vista lateral", "inervacion": "nervio radial", "funcion": "extiende carpo y art."},
    {"nombre": "separador largo del dedo 1", "region": "carpos y dedos", "ubicacion": "carpos y dedos extensor vista lateral", "inervacion": "nervio radial", "funcion": "extiende y flexiona el carpo"},
    {"nombre": "extensor de los dedos 1 y 2", "region": "carpos y dedos", "ubicacion": "carpos y dedos extensor vista lateral", "inervacion": "nervio radial", "funcion": "extensor y separador del dedo 1 y 2"},
    {"nombre": "flexor carpo radial", "region": "carpos y dedos", "ubicacion": "carpos y dedos flexor vista medial", "inervacion": "Nervio mediano", "funcion": "flexiona el carpo"},
    {"nombre": "flexor digital superficial", "region": "carpos y dedos", "ubicacion": "carpos y dedos flexor vista medial", "inervacion": "Nervio mediano", "funcion": "flexor del carpo y art de los dedos 2, 3,4,5"},
    {"nombre": "flexor digital profundo", "region": "carpos y dedos", "ubicacion": "carpos y dedos flexor vista medial", "inervacion": "Nervio mediano y nervio ulnar", "funcion": "flexor carpo y de las art de los 5 dedos"},
    {"nombre": "flexor carpoulnar", "region": "carpos y dedos", "ubicacion": "carpos y dedos flexor vista medial", "inervacion": "nervio ulnar", "funcion": "flexiona carpo y ayuda en art."},
    {"nombre": "serrato dorsal craneal", "region": "toracicos inspoiradores", "ubicacion": "tronco", "inervacion": "ramas de los nervios intercostales", "funcion": "mueven las costillas cranealmente"},
    {"nombre": "intercostales externos", "region": "toracicos inspoiradores", "ubicacion": "tronco", "inervacion": "ramas de los nervios intercostales", "funcion": "mueven las costillas cranealmente"},
    {"nombre": "elevadores de las costillas", "region": "toracicos inspoiradores", "ubicacion": "tronco", "inervacion": "ramas de los nervios intercostales", "funcion": "mueven las costillas cranealmente"},
    {"nombre": "recto del torax", "region": "toracicos inspoiradores", "ubicacion": "tronco", "inervacion": "primeros nervios intercostales", "funcion": "colabora en la inspiracion"},
    {"nombre": "diafragma", "region": "toracicos inspoiradores", "ubicacion": "tronco", "inervacion": "nervios frenicos izquierdo y derecho", "funcion": "aumenta el volumen de la cavidad"},
    {"nombre": "serrato dorsal caudal", "region": "toracicos espiradores", "ubicacion": "tronco", "inervacion": "ramas  de losultimos nervops intercostales", "funcion": "mueve las costillas caudalmente"},
    {"nombre": "subcostales", "region": "toracicos espiradores", "ubicacion": "tronco", "inervacion": "ultimos nervios intercostales", "funcion": "colabora en la espiracion"},
    {"nombre": "retractores de las costillas", "region": "toracicos espiradores", "ubicacion": "tronco", "inervacion": "ultimos nervios intercostales", "funcion": "colabora en la espiracion"},
    {"nombre": "transverso del torax", "region": "toracicos espiradores", "ubicacion": "tronco", "inervacion": "nervios intercostales", "funcion": "colabora en la espiracion"},
    {"nombre": "Intercostales internos", "region": "toracicos espiradores", "ubicacion": "tronco", "inervacion": "ramas de los nervios intercostales", "funcion": "actuan durante la espiracion"},
    {"nombre": "oblicuo externo del abdomen", "region": "mmiembro toracico", "ubicacion": "musculos abdomen", "inervacion": "ultimos nervios intercostales, costoabdominal, iliohipogastrico craneal y caudal, ilionguinal", "funcion": "soporta el peso del abdomen, ayuda en el parto, ayuda adefecar y participa en la locomocion"},
    {"nombre": "oblicuo interno del abdomen", "region": "mmiembro toracico", "ubicacion": "musculos abdomen", "inervacion": "ultimos nervios intercostales, costoabdominal, iliohipogastrico craneal y caudal, ilionguinal", "funcion": "soporta el peso del abdomen, ayuda en el parto, ayuda adefecar y participa en la locomocion"},
    {"nombre": "transverso del abdomen", "region": "mmiembro toracico", "ubicacion": "musculos abdomen", "inervacion": "ultimos nervios intercostales, costoabdominal, iliohipogastrico craneal y caudal, ilionguinal", "funcion": "soporta el peso del abdomen, ayuda en el parto, ayuda adefecar y participa en la locomocion"},
    {"nombre": "recto del abdomen", "region": "mmiembro toracico", "ubicacion": "musculos abdomen", "inervacion": "ultimos nervios intercostales, costoabdominal, iliohipogastrico craneal y caudal, ilionguinal", "funcion": "soporta el peso del abdomen, ayuda en el parto, ayuda adefecar y participa en la locomocion"},
    {"nombre": "psoas menos", "region": "miembro pelviano", "ubicacion": "cintura pelviana extrinsecos", "inervacion": "ramas ventrales de los nervios lumbares", "funcion": "dirige cranealmente la pelvis"},
    {"nombre": "iliopsoas", "region": "miembro pelviano", "ubicacion": "cintura pelviana extrinsecos", "inervacion": "ramas ventrales de los nervios lumbares", "funcion": "flexiona la cadera cranealmente"},
    {"nombre": "cuadrado lumbar", "region": "miembro pelviano", "ubicacion": "cintura pelviana extrinsecos", "inervacion": "ramas ventrales de los nervios lumbares", "funcion": "arquea la espalda"},
    {"nombre": "glueto superficial", "region": "miembro pelviano", "ubicacion": "art cadera intrinsecos", "inervacion": "nervio gluteo caudal", "funcion": "extiene la cadera pelviana"},
    {"nombre": "gluteo medio", "region": "miembro pelviano", "ubicacion": "art cadera intrinsecos", "inervacion": "nervio gluteo caudal", "funcion": "extiene la cadera caudalmente"},
    {"nombre": "piriforme", "region": "miembro pelviano", "ubicacion": "art cadera intrinsecos", "inervacion": "nervio gluteo caudal", "funcion": "extiende la cadera y aduce el muslo"},
    {"nombre": "gluteo profundo", "region": "miembro pelviano", "ubicacion": "art cadera intrinsecos", "inervacion": "nervio gluteo craneal", "funcion": "extiende la cadera y abductor"},
    {"nombre": "tensor de la fascia lata", "region": "miembro pelviano", "ubicacion": "art cadera intrinsecos", "inervacion": "nervio gluteo craneal", "funcion": "flexiona la cadera y extiende la rodilla"},
    {"nombre": "biceps femoral", "region": "miembro pelviano", "ubicacion": "caudales del muslo", "inervacion": "nervio gluteo craneal", "funcion": "extensor del miembro y aductordel miembro  pelviano."},
    {"nombre": "semitendinoso", "region": "miembro pelviano", "ubicacion": "caudales del muslo", "inervacion": "nervio ciatico", "funcion": "extensor"},
    {"nombre": "semimenbranoso", "region": "miembro pelviano", "ubicacion": "caudales del muslo", "inervacion": "nervio ciatico", "funcion": "extensor"},
    {"nombre": "sartrorio craneal", "region": "miembro pelviano", "ubicacion": "mediales del muslo", "inervacion": "nervio femoral y ramas musculares del nervio safeno", "funcion": "flexiona y aduce"},
    {"nombre": "sartrorio caudal", "region": "miembro pelviano", "ubicacion": "mediales del muslo", "inervacion": "nervio obturador", "funcion": "flexiona y aduce"},
    {"nombre": "gracilis", "region": "miembro pelviano", "ubicacion": "mediales del muslo", "inervacion": "nervio obturador", "funcion": "no funcion"},
    {"nombre": "pectineo", "region": "miembro pelviano", "ubicacion": "mediales del muslo", "inervacion": "nervio obturador", "funcion": "no funcion"},
    {"nombre": "aductor", "region": "miembro pelviano", "ubicacion": "mediales del muslo", "inervacion": "nervio obturador", "funcion": "no funcion"},
    {"nombre": "obturador interno", "region": "miembro pelviano", "ubicacion": "profundos de la cadera", "inervacion": "nervio ciatico", "funcion": "rota femur y extiende la cadera"},
    {"nombre": "gemelos", "region": "miembro pelviano", "ubicacion": "profundos de la cadera", "inervacion": "nervio ciatico", "funcion": "rota femur y extiende la cadera"},
    {"nombre": "obturador externo", "region": "miembro pelviano", "ubicacion": "profundos de la cadera", "inervacion": "nervio obturador", "funcion": "rota el miembro"},
    {"nombre": "cuadrado femoral", "region": "miembro pelviano", "ubicacion": "profundos de la cadera", "inervacion": "nervio ciatico", "funcion": "rota femur y extiende cadera"},
    {"nombre": "cuadriceps femoral", "region": "miembro pelviano", "ubicacion": "art rodilla", "inervacion": "nervio femoral", "funcion": "extensor y flexor de la rodilla"},
    {"nombre": "popliteo", "region": "miembro pelviano", "ubicacion": "art rodilla", "inervacion": "nervio tibial", "funcion": "flexor rodilla"},
    {"nombre": "tibial craneal", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio fibular profundo", "funcion": "flexor tarso, bota el pie ahacia afuera"},
    {"nombre": "extensor digital largo", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio fibular profundo", "funcion": "flexor tarso, extien art de los 4 dedos"},
    {"nombre": "fibular largo", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio fibular superficial", "funcion": "flexiona tarso, bots internamente el pie"},
    {"nombre": "extensor digital lateral", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio fibular superficial", "funcion": "extiende y separa el dedo 5"},
    {"nombre": "fibular corto", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio fibular superficial", "funcion": "flexiona el tarso"},
    {"nombre": "gastronemio lateral medial", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio tibial", "funcion": "extiende tarsos"},
    {"nombre": "flexor digital superficial", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio tibial", "funcion": "extiende tarsos, flexiona dedos"},
    {"nombre": "flexor digital profundo", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio tibial", "funcion": "extiende tarsos, flexiona dedos"},
    {"nombre": "tibial caudal", "region": "miembro pelviano", "ubicacion": "tarso y dedos", "inervacion": "nervio tibial", "funcion": "extiende el tarso"},
];

// ============================================================
// ESTADO
// ============================================================
let sesion = [];
let indiceActual = 0;
let musculoActual = null;
let aciertos = 0;
let fallos = 0;
let nivelPistaActual = 1;
let modoRapidoActivo = false;
let intervaloReloj = null;
let tiempoInicio = null;

// ============================================================
// LOCALSTORAGE
// ============================================================
function cargarProgreso() {
  const data = localStorage.getItem("progreso_musculos_v2");
  return data ? JSON.parse(data) : {};
}

function guardarProgreso(progreso) {
  localStorage.setItem("progreso_musculos_v2", JSON.stringify(progreso));
}

function obtenerEstadoMusculo(nombre) {
  const progreso = cargarProgreso();
  return progreso[nombre] || { fallos: 0, aciertos: 0, proximaVez: 0, vecesEstudiado: 0 };
}

function actualizarEstadoMusculo(nombre, acerto) {
  const progreso = cargarProgreso();
  const estado = obtenerEstadoMusculo(nombre);
  if (acerto) {
    estado.aciertos += 1;
    estado.fallos = 0;
    const diasEspera = Math.min(estado.aciertos, 7);
    estado.proximaVez = Date.now() + diasEspera * 24 * 60 * 60 * 1000;
  } else {
    estado.fallos += 1;
    estado.aciertos = 0;
    estado.proximaVez = Date.now() + 1 * 24 * 60 * 60 * 1000;
  }
  estado.vecesEstudiado += 1;
  progreso[nombre] = estado;
  guardarProgreso(progreso);
}

function reiniciarProgreso() {
  if (confirm("¿Borrar todo el progreso? Perderás todos tus aciertos.")) {
    localStorage.removeItem("progreso_musculos_v2");
    cargarResumenInicio();
    mostrarPantalla("pantalla-inicio");
  }
}

// ============================================================
// TEMPORIZADOR
// ============================================================
function iniciarReloj() {
  detenerReloj();
  tiempoInicio = Date.now();
  actualizarDisplayReloj();
  intervaloReloj = setInterval(actualizarDisplayReloj, 1000);
}

function detenerReloj() {
  if (intervaloReloj) { clearInterval(intervaloReloj); intervaloReloj = null; }
}

function actualizarDisplayReloj() {
  if (!tiempoInicio) return;
  const seg = Math.floor((Date.now() - tiempoInicio) / 1000);
  const m = Math.floor(seg / 60).toString().padStart(2, "0");
  const s = (seg % 60).toString().padStart(2, "0");
  const elem = document.getElementById("temporizador");
  if (elem) elem.textContent = `⏱ ${m}:${s}`;
}

// ============================================================
// INICIAR SESIÓN
// ============================================================
function iniciarSesion() {
  detenerReloj();
  modoRapidoActivo = false;
  const ahora = Date.now();
  const progreso = cargarProgreso();

  sesion = musculos.filter(m => {
    const e = progreso[m.nombre];
    return !e || e.proximaVez <= ahora;
});

  if (sesion.length === 0) {
    alert("🎉 ¡No hay músculos pendientes por hoy! Vuelve mañana.");
    return;
  }

  indiceActual = 0; aciertos = 0; fallos = 0;
  iniciarReloj();
  mostrarPregunta();
}

function iniciarQuizAleatorio(cantidad = 5) {
  detenerReloj();
  modoRapidoActivo = true;
  sesion = [...musculos].sort(() => Math.random() - 0.5).slice(0, cantidad);
  indiceActual = 0; aciertos = 0; fallos = 0;
  iniciarReloj();
  mostrarPregunta();
}

function salirSesion() {
  if (confirm("¿Salir de la evaluación?")) {
    detenerReloj();
    sesion = []; indiceActual = 0; aciertos = 0; fallos = 0; modoRapidoActivo = false;
    mostrarPantalla("pantalla-inicio");
    cargarResumenInicio();
  }
}

// ============================================================
// MOSTRAR PREGUNTA
// ============================================================
function mostrarPregunta() {
  if (indiceActual >= sesion.length) { mostrarFinSesion(); return; }

  musculoActual = sesion[indiceActual];
  nivelPistaActual = 1;

  document.getElementById("numero-pregunta").textContent =
    "Pregunta " + (indiceActual + 1) + " de " + sesion.length;
  document.getElementById("progreso").textContent =
    "✅ " + aciertos + "  ❌ " + fallos;

  // Barra de progreso
  const pct = (indiceActual / sesion.length) * 100;
  const fill = document.getElementById("progress-fill");
  if (fill) fill.style.width = pct + "%";

  // Ayudas
  document.getElementById("region-ayuda").textContent = musculoActual.region;
  document.getElementById("ubicacion-ayuda").textContent = musculoActual.ubicacion;
  //document.getElementById("descripcion-ayuda").textContent = musculoActual.descripcion;

  // Limpiar
  ["input-nombre", "input-inervacion", "input-funcion"].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("panel-pista").style.display = "none";

  mostrarPantalla("pantalla-pregunta");
  document.getElementById("input-nombre").focus();
}

// ============================================================
// PISTA PROGRESIVA
// ============================================================
function mostrarPista() {
  if (nivelPistaActual > 4) return;

  const nombre = musculoActual.nombre;
  const inervacion = musculoActual.inervacion;
  const funcion = musculoActual.funcion;
  const nivel = nivelPistaActual;

  const iniciales = (texto) => texto
    .split(" ")
    .map(p => p.charAt(0).toLowerCase())
    .join(" ");

  let pista = "";

  if (nivel === 1) {
    pista = `
      🔤 Nombre: <strong>${iniciales(nombre)}</strong><br>
      🪢 Inervación: <strong>${iniciales(inervacion)}</strong><br>
      ⚡ Función: <strong>${iniciales(funcion)}</strong>
    `;

  } else if (nivel === 2) {
    const palabras = nombre.split(" ");
    pista = `📏 Tiene ${palabras.length} palabra(s) y ${nombre.length} caracteres en total.`;

  } else if (nivel === 3) {
    const primera = nombre.split(" ")[0];
    pista = `📖 Primera palabra: <strong>${primera}</strong>`;

  } else {
    pista = `💡 El músculo es: <strong>${nombre}</strong>`;
  }

  document.getElementById("nivel-pista").textContent = nivel;
  document.getElementById("texto-pista").innerHTML = pista;
  document.getElementById("panel-pista").style.display = "block";

  nivelPistaActual++;

  if (nivelPistaActual > 4) {
    const btn = document.getElementById("btn-pista");
    btn.textContent = "🔒 Sin más pistas";
    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";
  }
}

// ============================================================
// NORMALIZAR Y COMPARAR
// ============================================================
function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ").trim();
}

function similitud(respuesta, correcto) {
  if (!respuesta || respuesta.trim() === "") return "incorrecto";
  const r = normalizar(respuesta);
  const c = normalizar(correcto);
  if (r === c) return "correcto";
  const rSin = r.replace(/^nervio\s+/, "");
  const cSin = c.replace(/^nervio\s+/, "");
  if (rSin === cSin) return "correcto";
  if (c.includes(r) || r.includes(c)) return "casi";
  return "incorrecto";
}

// ============================================================
// VERIFICAR RESPUESTA
// ============================================================
function verificarRespuesta() {
  const respNombre     = document.getElementById("input-nombre").value.trim();
  const respInervacion = document.getElementById("input-inervacion").value.trim();
  const respFuncion    = document.getElementById("input-funcion").value.trim();

  // Validación: todos vacíos
  if (!respNombre && !respInervacion && !respFuncion) {
    if (confirm("No escribiste ninguna respuesta. ¿Volver al menú principal?")) {
      detenerReloj();
      mostrarPantalla("pantalla-inicio");
      cargarResumenInicio();
    }
    return;
  }

  // Validación: algunos vacíos
  if (!respNombre || !respInervacion || !respFuncion) {
    const vacios = [];
    if (!respNombre) vacios.push("Nombre");
    if (!respInervacion) vacios.push("Inervación");
    if (!respFuncion) vacios.push("Función");
    if (!confirm(`Faltan: ${vacios.join(", ")}. ¿Continuar de todas formas?`)) return;
  }

  const campos = [
    { etiqueta: "Nombre del músculo", respuesta: respNombre,     correcto: musculoActual.nombre },
    { etiqueta: "Inervación",         respuesta: respInervacion, correcto: musculoActual.inervacion },
    { etiqueta: "Función",            respuesta: respFuncion,    correcto: musculoActual.funcion }
  ];

  let todoCorrecto = true;
  let html = "";

  campos.forEach(campo => {
    const resultado = similitud(campo.respuesta, campo.correcto);

    if (!campo.respuesta) {
      todoCorrecto = false;
      html += `
        <div class="resultado-campo">
          <p><strong>${campo.etiqueta}</strong></p>
          <p style="color:var(--text2);font-size:0.85rem;">Sin respuesta</p>
          <span class="tag tag-err">❌ No respondido</span>
          <p class="sugerencia">Correcto: <strong>${campo.correcto}</strong></p>
        </div>`;
    } else if (resultado === "correcto") {
      html += `
        <div class="resultado-campo">
          <p><strong>${campo.etiqueta}:</strong> ${campo.respuesta}</p>
          <span class="tag tag-ok">✅ Correcto</span>
        </div>`;
    } else if (resultado === "casi") {
      todoCorrecto = false;
      html += `
        <div class="resultado-campo">
          <p><strong>${campo.etiqueta}:</strong> ${campo.respuesta}</p>
          <span class="tag tag-warn">⚠ Casi correcto</span>
          <p class="sugerencia">Forma exacta: <strong>${campo.correcto}</strong></p>
        </div>`;
    } else {
      todoCorrecto = false;
      html += `
        <div class="resultado-campo">
          <p><strong>${campo.etiqueta}:</strong> ${campo.respuesta}</p>
          <span class="tag tag-err">❌ Incorrecto</span>
          <p class="sugerencia">Correcto: <strong>${campo.correcto}</strong></p>
        </div>`;
    }
  });

  if (todoCorrecto) {
    aciertos++;
    if (!modoRapidoActivo) actualizarEstadoMusculo(musculoActual.nombre, true);
    html += `<div style="margin-top:1rem;padding:0.8rem;background:var(--success-light);border-radius:var(--radius-sm);color:#065f46;font-weight:600;">🎉 ¡Perfecto! +1 punto</div>`;
  } else {
    fallos++;
    if (!modoRapidoActivo) actualizarEstadoMusculo(musculoActual.nombre, false);
    html += `<div style="margin-top:1rem;padding:0.8rem;background:var(--error-light);border-radius:var(--radius-sm);color:#991b1b;font-weight:500;">📌 Esta pregunta volverá pronto para repaso.</div>`;
  }

  document.getElementById("detalle-resultado").innerHTML = html;
  mostrarPantalla("pantalla-resultado");
}

// ============================================================
// NAVEGACIÓN
// ============================================================
function siguientePregunta() { indiceActual++; mostrarPregunta(); }
function repetirPregunta()   { mostrarPregunta(); }

function mostrarPantalla(id) {
  document.querySelectorAll(".pantalla").forEach(p => p.classList.remove("activa"));
  const pantalla = document.getElementById(id);
  if (pantalla) pantalla.classList.add("activa");
  if (id === "pantalla-pendientes") cargarListaPendientes();
  if (id === "pantalla-inicio")     cargarResumenInicio();
}

// ============================================================
// FIN DE SESIÓN
// ============================================================
function mostrarFinSesion() {
  detenerReloj();

  if (modoRapidoActivo) {
    document.getElementById("resumen-fin").innerHTML = `
      <p style="font-size:1.1rem;font-weight:700;margin-bottom:0.8rem;">Modo rápido · ${sesion.length} preguntas</p>
      <p>✅ Correctas: <strong>${aciertos}</strong></p>
      <p>❌ Falladas: <strong>${fallos}</strong></p>
      <p style="margin-top:0.8rem;color:var(--text2);font-size:0.9rem;">El progreso no se guarda en modo rápido.</p>
    `;
    mostrarPantalla("pantalla-fin");
    return;
  }

  const progreso = cargarProgreso();
  const ahora = Date.now();

  const pendientes = musculos.filter(m => {
    const e = progreso[m.nombre];
    return e && e.proximaVez > ahora && e.fallos > 0;
  });

  const dominados = musculos.filter(m => {
    const e = progreso[m.nombre];
    return e && e.aciertos >= 3;
  });

  let html = `
    <p style="font-size:1.1rem;font-weight:700;margin-bottom:0.8rem;">Resumen de sesión</p>
    <p>📋 Respondidas: <strong>${sesion.length}</strong></p>
    <p>✅ Correctas: <strong>${aciertos}</strong></p>
    <p>❌ Falladas: <strong>${fallos}</strong></p>
  `;

  if (pendientes.length > 0) {
    html += `<p style="margin-top:1rem;font-weight:600;">🔁 Vuelven mañana:</p>`;
    pendientes.forEach(m => {
      html += `<p style="color:var(--error);font-size:0.9rem;margin-top:0.2rem;">• ${m.nombre}</p>`;
    });
  }

  if (dominados.length > 0) {
    html += `<p style="margin-top:1rem;font-weight:600;">🏆 Dominados:</p>`;
    dominados.forEach(m => {
      html += `<p style="color:var(--success);font-size:0.9rem;margin-top:0.2rem;">• ${m.nombre}</p>`;
    });
  }

  document.getElementById("resumen-fin").innerHTML = html;
  mostrarPantalla("pantalla-fin");
}

// ============================================================
// LISTA DE PENDIENTES
// ============================================================
function cargarListaPendientes() {
  const progreso = cargarProgreso();
  const ahora = Date.now();
  let html = "";

  musculos.forEach(m => {
    const e = progreso[m.nombre];
    let badge = "";
    if (!e) {
      badge = `<span class="badge-estado badge-nuevo">Nuevo</span>`;
    } else if (e.proximaVez <= ahora) {
      badge = `<span class="badge-estado badge-pendiente">Hoy</span>`;
    } else if (e.aciertos >= 3) {
      badge = `<span class="badge-estado badge-dominado">Dominado ✓</span>`;
    } else {
      const dias = Math.ceil((e.proximaVez - ahora) / (1000 * 60 * 60 * 24));
      badge = `<span class="badge-estado badge-pronto">En ${dias}d</span>`;
    }
    html += `
      <div class="musculo-item">
        <span>${m.nombre}</span>
        ${badge}
      </div>`;
  });

  document.getElementById("lista-pendientes").innerHTML = html;
}

// ============================================================
// RESUMEN INICIO
// ============================================================
function cargarResumenInicio() {
  const progreso = cargarProgreso();
  const ahora = Date.now();
  const total = musculos.length;

  const pendientesHoy = musculos.filter(m => {
    const e = progreso[m.nombre];
    return !e || e.proximaVez <= ahora;
  }).length;

  const dominados = musculos.filter(m => {
    const e = progreso[m.nombre];
    return e && e.aciertos >= 3;
  }).length;

  const pct = Math.round((dominados / total) * 100);

  document.getElementById("resumen-inicio").innerHTML = `
    <div class="stat-row">
      <div class="stat">
        <span class="stat-num">${pendientesHoy}</span>
        <span class="stat-label">Pendientes hoy</span>
      </div>
      <div class="stat">
        <span class="stat-num">${dominados}</span>
        <span class="stat-label">Dominados</span>
      </div>
      <div class="stat">
        <span class="stat-num">${total}</span>
        <span class="stat-label">Total</span>
      </div>
    </div>
    <div class="progress-bar" style="margin-top:0.5rem;">
      <div class="progress-fill" style="width:${pct}%"></div>
    </div>
    <p style="font-size:0.78rem;color:var(--text2);margin-top:0.4rem;">${pct}% completado</p>
  `;
}

// Inicializar
cargarResumenInicio();
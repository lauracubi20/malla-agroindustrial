
const materias = [
  { id: "calculo", nombre: "Cálculo Diferencial", pre: [] },
  { id: "fisica", nombre: "Física Mecánica", pre: [] },
  { id: "quimica", nombre: "Química General", pre: [] },
  { id: "dibujo", nombre: "Dibujo de Ingeniería", pre: [] },
  { id: "intro", nombre: "Introducción a la Ingeniería Agroindustrial", pre: [] },
  { id: "consti", nombre: "Constitución Política", pre: [] },
  { id: "comunicacion", nombre: "Comunicación Lingüística", pre: [] },
  { id: "calculoIntegral", nombre: "Cálculo Integral", pre: ["calculo"] },
  { id: "fisica2", nombre: "Física Electromagnética", pre: ["fisica"] },
  { id: "bioquimica", nombre: "Bioquímica", pre: ["quimica"] },
  { id: "biologia", nombre: "Biología General", pre: [] },
  { id: "algebra", nombre: "Álgebra Lineal", pre: [] },
  { id: "ingles1", nombre: "Inglés I", pre: [] },
  { id: "vectorial", nombre: "Cálculo Vectorial", pre: ["calculoIntegral"] },
  { id: "termo", nombre: "Termodinámica", pre: ["fisica2"] },
  { id: "sistemas", nombre: "Sistemas Productivos Agrícolas", pre: ["bioquimica"] },
  { id: "electiva1", nombre: "Electiva Co-SH (I)", pre: [] },
  { id: "planos", nombre: "Dibujo de Planos", pre: ["dibujo"] },
  { id: "prog", nombre: "Introducción a la Programación", pre: [] },
  { id: "ingles2", nombre: "Inglés II", pre: ["ingles1"] },
  { id: "deporte", nombre: "Deporte Formativo", pre: [] },
  { id: "ecuaciones", nombre: "Ecuaciones diferenciales", pre: ["vectorial"] },
  { id: "fluidos", nombre: "Mecánica de Fluidos", pre: ["termo"] },
  { id: "numericos", nombre: "Métodos Numéricos", pre: ["vectorial"] },
  { id: "micro", nombre: "Microbiología General", pre: ["biologia"] },
  { id: "pecuaria", nombre: "Producción Pecuaria y Acuícola", pre: ["sistemas"] },
  { id: "economia", nombre: "Fundamentos de Economía", pre: [] },
  { id: "etica", nombre: "Ética", pre: [] },
  { id: "ingles3", nombre: "Inglés III", pre: ["ingles2"] },
  { id: "probabilidad", nombre: "Probabilidad y Estadística", pre: ["vectorial"] },
  { id: "transferencia", nombre: "Transferencia de Calor", pre: ["termo"] },
  { id: "fisiologia", nombre: "Fisiología Postcosecha", pre: ["sistemas"] },
  { id: "materias", nombre: "Química de Materias Primas", pre: ["quimica"] },
  { id: "electivaCB", nombre: "Electiva CB", pre: [] },
  { id: "ingles4", nombre: "Inglés IV", pre: ["ingles3"] },
  { id: "emprende", nombre: "Electiva Emprendimiento e Innovación", pre: [] }
];

const estado = JSON.parse(localStorage.getItem("materiasEstado") || "{}");

const grid = document.getElementById("grid");

function actualizarBotones() {
  document.querySelectorAll("button").forEach(btn => {
    const id = btn.dataset.id;
    const materia = materias.find(m => m.id === id);
    const completadas = materia.pre.every(p => estado[p]);
    btn.disabled = estado[id] ? false : !completadas;
    btn.className = estado[id] ? "completed" : "";
  });
}

materias.forEach(m => {
  const btn = document.createElement("button");
  btn.innerText = m.nombre;
  btn.dataset.id = m.id;
  btn.onclick = () => {
    estado[m.id] = !estado[m.id];
    localStorage.setItem("materiasEstado", JSON.stringify(estado));
    actualizarBotones();
  };
  grid.appendChild(btn);
});

actualizarBotones();

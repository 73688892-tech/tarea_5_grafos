// Yulisa Quispe Quispe - Tarea 5 Grafos

// Grafo con las conexiones del edificio
const grafo = {
  "Oficina 502": ["Pasillo Principal"],
  "Pasillo Principal": ["Escalera Este", "Escalera Oeste"],
  "Escalera Este": ["Zona Segura"],
  "Escalera Oeste": ["Zona Segura"],
  "Zona Segura": []
};

function encontrarRutaEvacuacion(inicio, fin) {
  let cola = [[inicio]];
  let visitados = [inicio];

  while (cola.length > 0) {
    let rutaActual = cola.shift();
    let ultimoNodo = rutaActual[rutaActual.length - 1];

    if (ultimoNodo === fin) {
      return rutaActual;
    }

    for (let vecino of grafo[ultimoNodo]) {
      if (!visitados.includes(vecino)) {
        visitados.push(vecino);
        cola.push([...rutaActual, vecino]);
      }
    }
  }
}

const ruta = encontrarRutaEvacuacion("Oficina 502", "Zona Segura");
console.log(`Ruta de evacuación segura de [Oficina 502] a [Zona Segura]: ${ruta.join(" ➔ ")}`);
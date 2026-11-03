// Yulisa Quispe Quispe - Tarea 5 grafo

// Grafo con las distancias entre puntos logísticos
const grafo = {
  "Almacen Central": { "Hub Norte": 4, "Hub Sur": 3 },
  "Hub Norte": { "Centro de Acopio": 2, "Destino Cliente": 5 },
  "Hub Sur": { "Centro de Acopio": 3, "Destino Cliente": 6 },
  "Centro de Acopio": { "Destino Cliente": 2 },
  "Destino Cliente": {}
};

function encontrarRutaCorta(inicio, destino) {
  const distancias = {};
  const anterior = {};
  let porVisitar = [];

  for (let nodo in grafo) {
    distancias[nodo] = Infinity;
    porVisitar.push(nodo);
  }
  distancias[inicio] = 0;

  while (porVisitar.length > 0) {
    let actual = null;
    for (let nodo of porVisitar) {
      if (actual === null || distancias[nodo] < distancias[actual]) {
        actual = nodo;
      }
    }

    if (actual === destino) break;
    porVisitar = porVisitar.filter(n => n !== actual);

    for (let vecino in grafo[actual]) {
      let nuevaDistancia = distancias[actual] + grafo[actual][vecino];
      if (nuevaDistancia < distancias[vecino]) {
        distancias[vecino] = nuevaDistancia;
        anterior[vecino] = actual;
      }
    }
  }

  let ruta = [];
  let nodoActual = destino;
  while (nodoActual) {
    ruta.unshift(nodoActual);
    nodoActual = anterior[nodoActual];
  }
  return ruta;
}

const ruta = encontrarRutaCorta("Almacen Central", "Destino Cliente");
console.log(`Ruta de envío óptima de [Almacen Central] a [Destino Cliente]: ${ruta.join(" ➔ ")}`);
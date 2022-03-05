// Helpers
function esPar(num){
  return num % 2 === 0;
}

function calcularPromedio(lista) {
  const sumaLista = lista.reduce( 
    function(valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Calculadora de Mediana

const salariosCol = colombia.map(function(persona){
  return persona.salary;
});

const salarioColSorted = salariosCol.sort((a, b) => a - b);

function medianaSalarios(lista){
  const mitad = parseInt(lista.length / 2);

  if(esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    const mediana = calcularPromedio([personaMitad1, personaMitad2]);
    return mediana;
  }
  else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

const medianaGeneral = medianaSalarios(salarioColSorted);

// Mediana del top 10%
(120 * (100))

const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;
const salariosColTop10 = salarioColSorted.splice(
  spliceStart, spliceCount
);

const medianaTop10 = medianaSalarios(salariosColTop10);

console.log({
  medianaGeneral,
  medianaTop10
})
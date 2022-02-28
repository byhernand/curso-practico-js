const currentList = document.getElementById('currentList'); 
const result = document.getElementById('result');

const lista = [];

function calcularPromedio(lista) {
  const sumaLista = lista.reduce( 
    function(valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function addItem() {
  const inputItems = document.getElementById("inputItems");
  const newItem = Number(inputItems.value);

  lista.push(newItem);
  lista.sort( (a, b) => a - b );
  console.log(lista);
  currentList.innerText = "Nosotros ordenaremos tus items de mayor a mernor:\n" + lista;
}

function esPar(numerito) {
  if(numerito % 2 === 0) {
    return true
  }
  else {
    return false
  }
}

function calcularMediana() {
  const mitadLista = parseInt(lista.length / 2);
  let mediana;

  if( esPar(lista.length) ) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedio = calcularPromedio([elemento1, elemento2]);
    mediana = promedio;
    result.innerText = "La mediana es " + mediana;
  }
  else {
    mediana = lista[mitadLista];
    console.log(mediana);
    result.innerText = "La mediana es " + mediana;
  }
}
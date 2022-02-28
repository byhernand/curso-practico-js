const inputItems = document.getElementById('inputItems');
const currentItems = document.getElementById("currentList");
const list = [];
const result = document.getElementById('result');

function addItem() {
  const newItem = Number(inputItems.value);
  list.push(newItem);
  currentItems.innerText = list;
  inputItems.value = "";
}

function calcularPromedio() {
  const sumaLista = list.reduce( 
    function(valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    } 
  );

  const promedioLista = sumaLista / list.length;

  result.innerText = promedioLista;
}
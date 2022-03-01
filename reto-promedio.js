const list = [];

function addItem() {
  // const list = [4, 9, 8, 6, 5, 4, 2];
  const inputMedia = document.getElementById("inputMedia");
  const inputValue = Number(inputMedia.value);
  console.log(inputValue);
  const showList = document.getElementById("currentList");

  list.push(inputValue);
  showList.innerText = list;
  inputMedia.value = "";
}

function calcularMediaGeometrica(){
  const listTotalValue = list.reduce((total, num)=> total * num);
  const equation = listTotalValue ** (1 / list.length);
  const mediaGeometrica = equation.toFixed(2);
  const result = document.getElementById('result');

  result.innerText = `La media geometrica es ${mediaGeometrica}`;
}
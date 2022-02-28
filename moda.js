const list = [];
const visibleList = [];

function addItem() {
  const inputItems = document.getElementById('inputItems');
  const inputValue = Number(inputItems.value);
  const showList = document.getElementById('showList');

  const newItem = { num: inputValue, times: 1 };
  const findOldItem = (i) => i.num == newItem.num;
  const itemExists = list.some(findOldItem);

  if(itemExists) {
    const oldItemPosition = list.findIndex(findOldItem);
    const oldItem = list[oldItemPosition];
    oldItem.times += 1;
  }
  else {
    list.push(newItem);
  }

  visibleList.push(newItem.num);
  showList.innerText = visibleList;
}

function calcularModa() {
  let maxRepetition = 0;
  const result = document.getElementById('result');

  for(let item of list){
    if(item.times > maxRepetition){
      maxRepetition = item.times;
    }
  }

  const modeList = list.filter( (i)=> i.times == maxRepetition );

  if(modeList.length > 1) {
    const modeNumber = modeList.map((a)=> a.num);
    const mode = `La moda es ${modeNumber} se repiten ${maxRepetition} veces`;
    result.innerText = mode;
  }
  else {
    const modeNumber = modeList[0].num;
    const mode = `La moda es ${modeNumber}, se repite ${maxRepetition} veces`;
    result.innerText = mode;
  }
}
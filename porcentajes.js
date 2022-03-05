function percentageX() {
  const inputNum1 = document.getElementById('num1');
  const inputNum2 = document.getElementById('num2');
  const num1 = Number(inputNum1.value);
  const num2 = Number(inputNum2.value);
  const result = (num1 * 100) / num2;

  if( isPair(result) ){
    const finalResult = Math.round(result);;
    const showResult = document.getElementById('result');
    showResult.innerText = `${num1} es el ${finalResult}% de ${num2}`;
  }
  else{
    const finalResult = result.toFixed(2);
    const showResult = document.getElementById('result');
    showResult.innerText = `${num1} es el ${finalResult}% de ${num2}`;
  }
}

function isPair(num) {
  return num % 2 === 0
}
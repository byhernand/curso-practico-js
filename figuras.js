// Codigo del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Codigo del circulo
const PI = Math.PI;

function diametroCirculo(radio){
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) / 2
}

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;
  console.log(typeof value);
  const perimetro = perimetroCuadrado(value);
  alert(perimetro + "cm"); 
}

function calcularAreaCuadrado() {
  const input = document.getElementById('inputCuadrado');
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area + "cm^2");
}

// Triangulo

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById('lado1Triangulo');
  const lado2 = document.getElementById('lado2Triangulo');
  const base = document.getElementById('baseTriangulo');
  
  const l1 = Number(lado1.value);
  const l2 = Number(lado2.value);
  const b = Number(base.value);
  
  const perimetro = perimetroTriangulo(l1, l2, b);
  alert(perimetro + "cm"); 
}

function calcularAreaTriangulo() {
  const base = document.getElementById('baseTriangulo');
  const altura = document.getElementById('alturaTriangulo');
  
  const b = Number(base.value);
  const a = Number(altura.value);
  
  const area = areaTriangulo(b, a);
  alert(area + "cm^2");
}

// Circulo

function calcularPerimetroCirculo() {
  const radioCirculo = document.getElementById('radioCirculo');
  const radio = radioCirculo.value;
  
  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radioCirculo = document.getElementById('radioCirculo');
  const radio = radioCirculo.value;
  
  const area = areaCirculo(radio);
  alert(area);
}
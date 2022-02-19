// Codigo del triangulo

function esIsosceles(lado1, lado2, base){
  if(lado1 === lado2 && lado1 != base){
    return true;
  }
  else{
    return false;
  }
}

function calcularAltura() {
  const lado1Triangulo = document.getElementById('lado1Triangulo');
  const lado2Triangulo = document.getElementById('lado2Triangulo');
  const baseTriangulo = document.getElementById('baseTriangulo');

  const lado1 = Number(lado1Triangulo.value);
  const lado2 = Number(lado2Triangulo.value);
  const base = Number(baseTriangulo.value);

  if( esIsosceles(lado1, lado2, base) ){
    const c = lado1; // Hipotenusa
    const b = base / 2; 
    const a = Math.sqrt( (c ** 2) - (b ** 2) );
    alert(" La altura del triangulo isosceles es " + a);
  }
}
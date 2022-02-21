//let figura = document.getElementById("figuras").value;



/*switch (figura) {
    case 'triangulo':
        
        break;

    default:
        alert("Debe seleccionar una figura para calcular su área o perímetro")
        break;
}*/

// Calcular área y perímetro de un cuadrado
var areaCuadrado = lado => lado*lado;
var perimetroCuadrado = lado => lado * 4;

// Calcular el área y perímetro de un rectángulo
var areaRectangulo = (lado1, lado2) => lado1 * lado2;
var perimetroRectangulo = (lado1, lado2) => lado1*2 + lado2*2;

// Calcular el área y perímetro de un triángulo
var areaTriangulo = (base, altura) => (base*altura)/2;
var perimetroTriangulo = (lado1, lado2, lado3) => (lado1+lado2+lado3);

//Calcular el área de un círculo
var areaCirculo = radio => (radio*radio)*3.1416;
var perimetroCirculo = radio => 2*3.1416*radio;

// Calcular la altura de un triángulo isóceles
var alturaTriangulo = (base, ladoA, ladoB) => {
    if (ladoA === ladoB) {
        const catetoA = base/2;
        const altura = Math.sqrt((ladoA*ladoA)-(catetoA*catetoA));
        return `Altura: ${altura}`
    }else{
        return 'No es un triángulo isóceles';
    }

}

function calcularAreaPerimetroCuadrado() {
    const input = document.getElementById('ladoCuadrado');
    const lado = Number(input.value);
    const area = areaCuadrado(lado);
    const perimetro = perimetroCuadrado(lado);
    document.getElementById('areaCuadrado').innerText = `Área: ${area}`;
    document.getElementById('perimetroCuadrado').innerText = `Perímetro: ${perimetro}`;    
}

function calcularAreaPerimetroRectangulo() {
    const lado1 = Number(document.getElementById('ladoRectangulo1').value);
    const lado2 = Number(document.getElementById('ladoRectangulo2').value);
    const area = areaRectangulo(lado1,lado2);
    const perimetro = perimetroRectangulo(lado1,lado2);
    document.getElementById('areaRectangulo').innerText = `Área: ${area}`;
    document.getElementById('perimetroRectangulo').innerText = `Perímetro: ${perimetro}`;    
}

function calcularAreaPerimetroTriangulo() {
    const base = Number(document.getElementById('base').value);
    const lado2 = Number(document.getElementById('ladot2').value);
    const lado3 = Number(document.getElementById('ladot3').value);
    const altura = Number(document.getElementById('altura').value);
    const area = areaTriangulo(base,altura);
    const perimetro = perimetroTriangulo(base,lado2,lado3);
    document.getElementById('areaTriangulo').innerText = `Área: ${area}`;
    document.getElementById('perimetroTriangulo').innerText = `Perímetro: ${perimetro}`;    
}

function calcularAreaPerimetroCirculo() {
    const radio = Number(document.getElementById('radio').value);
    const area = areaCirculo(radio);
    const perimetro = perimetroCirculo(radio);
    document.getElementById('areaCirculo').innerText = `Área: ${area}`;
    document.getElementById('perimetroCirculo').innerText = `Perímetro: ${perimetro}`;    
}

function calcularAlturaTrianguloIsoceles(){
    const base = Number(document.getElementById('basetI').value);
    const ladoA = Number(document.getElementById('ladotA').value);
    const ladoB = Number(document.getElementById('ladotB').value);

    const altura = alturaTriangulo(base, ladoA, ladoB);
    document.getElementById("alturaTrianguloIsoceles").innerText = altura;
}
function obtenerNumeros(){
    let numeros = document.getElementById('datos').value;
    let arrayNumeros = numeros.split(",").map(numero=>Number(numero));
    return arrayNumeros;
}

function calcularMedia(){
    let arrayNumeros = obtenerNumeros();
    let suma = arrayNumeros.reduce((anterior,actual)=>anterior+actual,0);
    let mediaAritmetica = suma / arrayNumeros.length;
    document.getElementById('mediaAritmetica').innerText = mediaAritmetica;
}

function ordenarDatos(){
    let arrayNumeros = obtenerNumeros();
    let arrayOrdenado = arrayNumeros.sort((a,b)=>a-b);
    return arrayOrdenado;
}

function calcularMediana(){
    let arrayOrdenado = ordenarDatos(),
        mediana = 0,
        indice = 0;
    
    if (arrayOrdenado.length % 2 === 0) {
        indice = (arrayOrdenado.length)/2;
        mediana = (arrayOrdenado[indice]+arrayOrdenado[indice-1])/2;
    } else {
        indice = (arrayOrdenado.length-1)/2;
        mediana = arrayOrdenado[indice];
    }

    document.getElementById('mediana').innerText = mediana;
}

function calcularModa(){
    let arrayNumeros = obtenerNumeros(),
    moda = arrayNumeros.sort((a,b) =>
        arrayNumeros.filter(v => v===a).length
        - arrayNumeros.filter(v => v===b).length
    ).pop();

    document.getElementById('moda').innerText = moda;
}
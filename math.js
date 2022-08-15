console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = Math.pow(ladoCuadrado, 2);


function calcularCuadrado(lado) {
    return{
        perimetro: lado * 4,
        area: Math.pow(lado, 2),
    };
};

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

console.groupEnd('Cuadrado');


console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaDelTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;


function calcularTriangulo(lado1, lado2, base, altura) {
    return{
        perimetro: lado1 + lado2 + base, 
        area: (base * altura) / 2,
    };
};

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaDelTriangulo,
});

console.groupEnd('Triangulo');


console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const circuferencia = diametroCirculo * Math.PI.toFixed(3);
const areaCirculo = Math.pow(radioCirculo, 2) * Math.PI.toFixed(3);


function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return{
        circunferencia: diametro * Math.PI.toFixed(3),
        area: radioAlCuadrado * Math.PI.toFixed(3),
    };
};

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circuferencia,
    areaCirculo,
});

console.groupEnd('Circulo');
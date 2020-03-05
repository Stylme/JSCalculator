function Suma() {
    var valorA = parseInt(prompt('Dame el valor A:'));
    var valorB = parseInt(prompt('Dame valor B:'));
    var resultado = valorA + valorB;
    document.getElementById('resultado').value = (valorA + "  +  " + valorB + " = " + resultado);
}

function Resta() {
    var valorA = parseInt(prompt('Dame el valor A:'));
    var valorB = parseInt(prompt('Dame valor B:'));
    var resultado = valorA - valorB;
    document.getElementById('resultado').value = (valorA + "  -  " + valorB + " = " + resultado);
}

function Division() {
    var valorA = parseInt(prompt('Dame el valor A:'));
    var valorB = parseInt(prompt('Dame valor B:'));
    var resultado = valorA / valorB;
    document.getElementById('resultado').value = (valorA + "  /  " + valorB + " = " + resultado);
}

function Multiplicacion() {
    var valorA = parseInt(prompt('Dame el valor A:'));
    var valorB = parseInt(prompt('Dame valor B:'));
    var resultado = valorA * valorB;
    document.getElementById('resultado').value = (valorA + "  *  " + valorB + " = " + resultado);
}

function potenciacion() {
    var valorA = parseInt(prompt('Dame el valor A:'));
    var valorB = parseInt(prompt('Dame valor B:'));
    var resultado = Math.pow(valorA, valorB);
    document.getElementById('resultado').value = (valorA + "  ^  " + valorB + " = " + resultado);
}

function operaciones(boton) {
    var frm = document.getElementById("frm");
    var n1 = parseInt(frm.textNumUno.value);
    var n2 = parseInt(frm.textNumDos.value);
    switch (boton.value) {
        case "+":
            var resultado = n1 + n2;
            document.getElementById('resultado').value = (n1 + "  +  " + n2 + " = " + resultado);
            break;
        case "-":
            var resultado = n1 - n2;
            document.getElementById('resultado').value = (n1 + "  -  " + n2 + " = " + resultado);
            break;
        case "/":
            var resultado = n1 / n2;
            document.getElementById('resultado').value = (n1 + "  /  " + n2 + " = " + resultado);
            break;
        case "*":
            var resultado = n1 * n2;
            document.getElementById('resultado').value = (n1 + "  *  " + n2 + " = " + resultado);
            break;
        case "^":
            var resultado = Math.pow(n1,n2);
            document.getElementById('resultado').value = (n1 + "  ^  " + n2 + " = " + resultado);
            break;
    }
}
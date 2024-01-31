

function velocidad() {
    var Disk = Number(document.getElementById("d1").value);
    var TiemM = Number(document.getElementById("d2").value);
    var re1 = document.querySelector('label[for="l1"]');
    re1.innerHTML = "la respuesta es: " + (Disk / TiemM);
}

function triangulo() {
    var lado1 = Number(document.getElementById("la1").value);
    var lado2 = Number(document.getElementById("la2").value);
    var lado3 = Number(document.getElementById("la3").value); 
    var re2 = document.querySelector('label[for="l2"]');
    if(lado1 == lado2 && lado1 == lado3 && lado1 == lado2){
        re2.innerHTML = "la respues es: equiláteros";
    } 
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        re2.innerHTML = "la respues es: isósceles ";
    }
    else{
        re2.innerHTML = "la respues es: Escaleno "; 
    }
}

function calculadora(op){
    var dat1 = Number(document.getElementById("val1").value);
    var dat2 = Number(document.getElementById("val2").value);
    var re3 = document.querySelector('label[for="l3"]')
    if(op == 1){
        re3.innerHTML = "la respuesta es: " + (dat1+dat2);
    }
    else if(op == 2){
        re3.innerHTML = "la repuesta es: " + (dat1-dat2);
    }
    else if(op == 3){
        re3.innerHTML = "la repuesta es: " + (dat1*dat2);
    }
    else if(op == 4){
        re3.innerHTML = "la repuesta es: " + (dat1/dat2);
    }
}

function calprim() {
    var re4 = document.querySelector('label[for="l4"]');
    var numero = Number(document.getElementById('num').value);
    var esPrimo = calculo_de_num_p(numero);

    if (esPrimo) {
        re4.textContent = "Es un número primo.";
    } else {
        re4.textContent = "No es un número primo.";
    }
}

function calculo_de_num_p(numero1) {
    if (numero1 <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero1); i++) {
        if (numero1 % i === 0) {
            return false;
        }
    }

    return true;
}

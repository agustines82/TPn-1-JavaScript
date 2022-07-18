//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los 3:
let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
let numero3 = parseInt(prompt("Ingrese un tercer numero"));

if (numero1 >= numero2 && numero2 >= numero3) {
    document.write("El mayor número es: " + numero1);
} else if (numero1 <= numero2 && numero2 <= numero3) {
    document.write("El mayor número es: " + numero3);
} else {
    if (numero2 >= numero1 && numero2 >= numero3) {
        document.write("El mayor número es: " + numero2);
    }
}

/*
//probando otra forma:
if (numero1 >= numero2) {
    if (numero2 >= numero3) {
        document.write("El mayor número es: " + numero1);
    }
} else {
    if (numero1 <= numero2) {
        if (numero2 <= numero3) {
            document.write("El mayor número es: " + numero3);
        }
    }
}
//en esta opcion me funciona todo menos la opcion 7 7 9.
*/

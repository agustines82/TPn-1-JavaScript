//Ejercicio 6 - Escribe un programa que pida 2 números y escriba en la pantalla cual es el mayor.
let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
if (numero1 > numero2) {
    document.write("El mayor número es: " + numero1);
} else if (numero1 < numero2) {
    document.write("El mayor número es: " + numero2);
} else {
    document.write("Ambos números son iguales");
}

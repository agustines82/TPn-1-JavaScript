//Escribe un programa que pida un número y nos diga si es divisible por 2,3,5 o 7 (solo hay que comprobar si lo es por uno de los 4)
let numero1 = parseInt(prompt("Ingrese un numero"));

if (numero1 % 2 === 0) {
    document.write("El número: " + numero1 + " es divisible en 2");
} else if (numero1 % 3 === 0) {
    document.write("El número: " + numero1 + " es divisible en 3");
} else if (numero1 % 5 === 0) {
    document.write("El número: " + numero1 + " es divisible en 5");
} else if (numero1 % 7 === 0) {
    document.write("El número: " + numero1 + " es divisible en 7");
}

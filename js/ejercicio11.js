//Añadir al ejercicio anterior que nos diga por cuál de los 4 es divisible (hay que decir todos por los que es divisible).
let numero1 = parseInt(prompt("Ingrese un numero"));

if (numero1 % 2 === 0) {
    document.write("El número: " + numero1 + " es divisible en 2");
}
if (numero1 % 3 === 0) {
    document.write("El número: " + numero1 + " es divisible en 3");
}
if (numero1 % 5 === 0) {
    document.write("El número: " + numero1 + " es divisible en 5");
}
if (numero1 % 7 === 0) {
    document.write("El número: " + numero1 + " es divisible en 7");
}

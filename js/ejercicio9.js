//Escribe un programa que pida una frase y escriba las vocales que aparecen. Tener en cuenta la función length substring charAt
let frase = prompt("Ingrese una frase");

// CON CICLO FOR:

let vocales = "aeiouáéíóúöü";
let vocal = "";
let contador = 0;

for (i = 0; i <= frase.length; i++) {
    if (vocales.includes(frase.toLowerCase().charAt(i))) {
        vocal = vocal + frase.charAt(i);
        contador++;
    }
}

document.write("Las vocales en la frase son: " + vocales + "<br>");
document.write("Son " + (contador - 1) + " vocales.");

/*
//   ***2DO MODO ***
let vocales = 0;
let voc = "";
let vocales3 = "aeiouáéíóú";

for (i of frase.toLowerCase()) {
    if (vocales3.includes(i)) {
        vocales++;
        voc = voc + i;
    }
}
document.write(voc + "<br>");
document.write(vocales);
*/
/*
//   *** 3ER MODO***
for (let letra of frase) {
    if (/[aeiouáéíóúAEIOUÁÉÍÓÚ]/.test(letra)) {
        vocales++;
    }
}
document.write(vocales);

//   ***4TO MODO***
let vocales2 = "aeiouáéíóúAEIOUÁÉÍÓÚ";

for (i = 0; i <= frase.length; i++) {
    if (vocales2.indexOf(frase[i]) !== -1) {
        vocales++;
        voc = voc + i;
    }
}
document.write(voc + "<br>");
document.write(vocales);
*/

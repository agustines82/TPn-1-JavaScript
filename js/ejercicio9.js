//Escribe un programa que pida una frase y escriba las vocales que aparecen. length substring charAt
let frase = prompt("Ingrese una frase");
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

/*
//   *** 1er modo***
for (let letra of frase) {
    if (/[aeiouáéíóúAEIOUÁÉÍÓÚ]/.test(letra)) {
        vocales++;
    }
}
document.write(vocales);

//   ***2do modo***
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

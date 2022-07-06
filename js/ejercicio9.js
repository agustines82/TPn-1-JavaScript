//Escribe un programa que pida una frase y escriba las vocales que aparecen. Tener en cuenta la función length substring charAt

//SOLUCION CON CICLO FOR:
let frase = prompt("Ingrese una frase");
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
//SOLUCION SOLO CON IF (SIN CICLO FOR):
let frase1 = prompt("Ingrese una frase");
let a = "a";
let e = "e";
let i = "i";
let o = "o";
let u = "u";
let A = "á";
let E = "é";
let I = "í";
let O = "ó";
let U = "ú";

if (frase1.toLowerCase().includes(a)) {
    document.write(a);
}
if (frase1.toLowerCase().includes(e)) {
    document.write(e);
}
if (frase1.toLowerCase().includes(i)) {
    document.write(i);
}
if (frase1.toLowerCase().includes(o)) {
    document.write(o);
}
if (frase1.toLowerCase().includes(u)) {
    document.write(u);
}
if (frase1.toLowerCase().includes(A)) {
    document.write(A);
}
if (frase1.toLowerCase().includes(E)) {
    document.write(E);
}
if (frase1.toLowerCase().includes(I)) {
    document.write(I);
}
if (frase1.toLowerCase().includes(O)) {
    document.write(O);
}
if (frase1.toLowerCase().includes(U)) {
    document.write(U);
}

/*
// OTRAS SOLUCIONES CON CICLO FOR:
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

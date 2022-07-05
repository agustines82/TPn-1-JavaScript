//Escribe un programa que pida una frase y escriba las vocales que aparecen.
let frase = prompt("Ingrese una frase");
let vocales = 0;

for (let letra of frase) {
    if (/[aeiouáéíóúAEIOUÁÉÍÓÚ]/.test(letra)) {
        vocales++;
    }
}
document.write(vocales);

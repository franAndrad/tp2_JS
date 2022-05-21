let fila = parseInt(prompt("Ingrese la fila"));
let columna = parseInt(prompt("Ingrese la columna"));
let calculo= (fila*columna)+1;

for (let i = 0 ; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
        calculo--;
        document.write(calculo + " ");   
    }
    document.write("<br>");
}
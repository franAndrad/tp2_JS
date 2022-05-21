// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

do{
    let cadena = prompt("Ingrese una cadena");
    document.write(cadena+"-");
}while(confirm("Presione una opcion!") != false);
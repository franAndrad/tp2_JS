// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

while(confirm("¿Desea ingresar una cadena?") != false){
    let cadena = prompt("Ingrese una cadena");
    if(cadena != null){
        document.write(`${cadena} - `);
    }else{
        continue;
    }
}
// Dificultad:  🟢🟡
// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
while(confirm("¿Desea ingresar el numero?")!=false){
    let num = parseInt(prompt("Ingrese un un numero: ")); 
    console.log(num);
    if(Number.isNaN(num)===true){
        alert("Ingrese un numero valido");
    }
    else{ 
        suma+=num;
    }
}
document.write(suma);

// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
let cadena = prompt("Ingrese un texto");
let contador=0;

for (let i = 0; i < cadena.length; i++) {
    if(cadena.charAt(i)==='a' || cadena.charAt(i)==='e' || cadena.charAt(i)==='i' || cadena.charAt(i)==='o' || cadena.charAt(i)==='u'){
        alert(`la posicion de la primer vocal es ${i+1}`)
        break;
    }
}
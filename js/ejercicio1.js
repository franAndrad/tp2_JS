// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad = parseInt(prompt("Ingrese su edad: "));

if(edad>=18 && edad<=75 )
    document.write("Puede conduncir");
else{
    if(edad>0 && edad<18 )
        document.write("No puede conducir");
    else
        document.write("ingrese un valor valido");
}
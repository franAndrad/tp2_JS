/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
let numero = parseInt(prompt("Ingrese un numero entre 1 y 50 para realizar su piramide"));
if(numero>=1 && numero<= 50){
    for (let i = 1; i <= numero; i++) {
        for (let j = 0; j < i; j++) {
            document.write(i);
        }
    document.write("<br>");
    }
}else
    alert("Numero no valido");
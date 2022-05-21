/* 
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/

while(confirm("¿Desea ingresar el DNI?")!=false){
    let num = parseInt(prompt("Ingrese el numero"));
    if(Number.isNaN(num)===true || num<0 || num>99999999){
        alert("Ingrese un numero valido");
    }else{
        num%=23;
        switch(num){
            case 0:
                alert("La letra correspondiente es T");
            break;
            case 1:
                alert("La letra correspondiente es R");
            break;
            case 2:
                alert("La letra correspondiente es W");
            break;
            case 3:
                alert("La letra correspondiente es A");
            break;
            case 4:
                alert("La letra correspondiente es G");
            break;
            case 5:
                alert("La letra correspondiente es M");
            break;
            case 6:
                alert("La letra correspondiente es Y");
            break;
            case 7:
                alert("La letra correspondiente es F");
            break;
            case 8:
                alert("La letra correspondiente es P");
            break;
            case 9:
                alert("La letra correspondiente es D");
            break;
            case 10:
                alert("La letra correspondiente es X");
            break;
            case 11:
                alert("La letra correspondiente es B");
            break;
            case 12:
                alert("La letra correspondiente es N");
            break;
            case 13:
                alert("La letra correspondiente es J");
            break;
            case 14:
                alert("La letra correspondiente es Z");
            break;
            case 15:
                alert("La letra correspondiente es S");
            break;
            case 16:
                alert("La letra correspondiente es Q");
            break;
            case 17:
                alert("La letra correspondiente es V");
            break;
            case 18:
                alert("La letra correspondiente es H");
            break;
            case 19:
                alert("La letra correspondiente es L");
            break;
            case 20:
                alert("La letra correspondiente es C");
            break;
            case 21:
                alert("La letra correspondiente es K");
            break;
            case 22:
                alert("La letra correspondiente es E");
            break;           
        }
    }
}


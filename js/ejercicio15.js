// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt("Ingrese el texto para saber las cantidad de vocales que tiene: ");
let contador=0;
for(let i=0;i<cadena.length;i++){    
    if(cadena.charAt(i)==='a'){
        contador++;
    }
    if(cadena.charAt(i)==='e'){
        contador++;
    }
    if(cadena.charAt(i)==='i'){
        contador++;
    }
    if(cadena.charAt(i)==='o'){
        contador++;
    }
    if(cadena.charAt(i)==='u'){
        contador++;
    }
}
alert(`tiene ${contador} vocales`)
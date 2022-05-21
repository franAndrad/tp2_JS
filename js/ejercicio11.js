// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

let nombre1=prompt("Ingrese el nombre: "),edad1=parseInt(prompt("Ingrese la edad"));
let nombre2=prompt("Ingrese el nombre: "),edad2=parseInt(prompt("Ingrese la edad"));
let nombre3=prompt("Ingrese el nombre: "),edad3=parseInt(prompt("Ingrese la edad"));

let max = Math.max(edad1,edad2,edad3);

if(max===edad1)
    alert(`El mayor es ${nombre1}`);
else if(max===edad2)
    alert(`El mayor es ${nombre2}`);
else
    alert(`El mayor es ${nombre3}`);
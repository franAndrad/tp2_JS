// 12- Realiza un script que genere un número aleatorio entre 1 y 99
document.write("Numero aleatorio entre 1 y 99");
let aleatorio=Math.floor(Math.random()*99+1);
document.write(`<br>num: ${aleatorio}`);

// Verificamos que no se pase
for(let i=0;i<100000;i++){
    if(aleatorio<1 || aleatorio>99)
        document.write(`<br>num: ${aleatorio}`);
}

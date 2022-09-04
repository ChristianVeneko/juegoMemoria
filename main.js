//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;

let numeros = [1,1,2,2,3,3,4,4,5,6,6,7,7,8,8];

numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//funcion destapar
function destapar(id){
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);
    
    if(tarjetasDestapadas == 1){
        // Mostrar el primer numero
        tarjeta1 = document.getElementById(id);
        tarjeta1.innerHTML = numeros[id];  
    }
}
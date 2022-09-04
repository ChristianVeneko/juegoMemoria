//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;

//apuntando a documento html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos')

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
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado;  

        // Deshabilitar primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2)
    {
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        // Deshabilitar segundo boton
        tarjeta2.disabled = true;

        //incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            //encerar contador de tarjetas destapadas
            tarjetasDestapadas = 0

            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos ${aciertos}`;
        }else{
            //mostrar momentaneamente los valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = ``;
                tarjeta2.innerHTML = ``;
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0
            },200)
        }
    } 

}
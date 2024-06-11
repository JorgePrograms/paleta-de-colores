
const colorBoton=document.getElementById('colorBoton');
const colorNombre=document.getElementById('colorNombre');


colorBoton.addEventListener('click',
    ()=>{
        const randomColor=generarHexadecimal();

        document.body.style.backgroundColor=randomColor;
        colorNombre.textContent=randomColor;
    }
);

const generarHexadecimal = ()=>{

    let letras='0123456789ABCDEF';
    let color='#'

    for(i=0;i<6;i++){
        const indice=Math.floor(Math.random()*letras.length);
        color+=letras.charAt(indice);
    }
    return color;
}
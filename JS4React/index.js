/*console.log('Hola Mundo');

function suma(a,b){
    return a + b;
};

//fuction fatArrow
const sumar=(a,b)=>{
    return a+b;
};

const sumar2=(a,b)=>a+b;


console.log(suma(2,3));
console.log(sumar(2,3));
console.log(sumar2(2,8));

const usuario={
    nombre:'Gregorio',
    apellido:'Corchado',
    edad:19,
    direccion:{
        pais:'Mexico',
        ciudad:'Ciudad de Mexico',
        calle:'Miguel Aleman'
    },
    amigos:['Alex','Gregorio'],
    estatus: true,
    correo: eviarcor=()=>'enviando'
};

console.log(usuario.correo())*/

const titulo = document.createElement('h1')
titulo.innerText='Soy un Titulo'
document.body.append(titulo)

const boton= document.createElement('button')
boton.innerText='Presiona'
document.body.append(boton)

boton.addEventListener('click',function(){
    console.log('Evento click ejecutado')
})
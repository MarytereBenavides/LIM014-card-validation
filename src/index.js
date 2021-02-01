import validator from './validator.js'; 

const ContenedorUno = document.getElementById('container');
const ContenedorDos = document.getElementById('container2');


let mensaje;
const btnValidar = document.getElementById('btnValidar');
const btnRegresar = document.getElementById('btnRegresar');


btnValidar.addEventListener('click',(validacion)=>{

    //obteniendo el valor del input
    const numeroTarjeta = document.getElementById('numero').value;

    //llamar a la función isvalid
    let resultadoFinal = validator.isValid(numeroTarjeta);

    const textoAlert = document.getElementById('textoAlert');
    //responder al ingreso vacío y solo usar caracteres numericos
    if(numeroTarjeta === '' || (isNaN(numeroTarjeta) === true)){
        validacion.preventDefault();
        textoAlert.classList.remove('ocultar');
        textoAlert.innerHTML = 'Necesitas llenar este campo';
    }else{
        //mostrar y ocultar contenedores
        ContenedorDos.classList.add('mostrar');
        ContenedorUno.classList.remove('mostrar');
        ContenedorUno.classList.add('ocultar');

        if(resultadoFinal===true){ 
            mensaje = '¡Tu solicitud de compra ha sido confirmada!';
            document.getElementById("emoticon").src='img\\bears.gif';
      
        }else{
            mensaje= '¡TU TARJETA NO ES VÁLIDA!';
            document.getElementById("emoticon").src='img\\sadbear.gif';
            btnRegresar.classList.remove('ocultar');
        }
    }

    //llamar a la función maskify
    let numeroOculto = validator.maskify(numeroTarjeta);

    //mostrar los mensajes
    const mostrarMensaje = document.getElementById('mensaje');
    mostrarMensaje.innerHTML = `${mensaje}`

    const mostrarResultado = document.getElementById('numeroOculto');
    mostrarResultado.innerHTML = `${numeroOculto}`

    btnRegresar.addEventListener('click',()=>{
        ContenedorUno.classList.add('mostrar');
        ContenedorDos.classList.remove('mostrar');
    
        document.getElementById('numero').value = "";
        textoAlert.classList.add('ocultar');
        textoAlert.innerHTML = "";
    })

});
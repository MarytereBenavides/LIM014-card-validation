import validator from './validator.js'; 

//obtiene un elemento por id
const ContenedorUno = document.getElementById('container');
const ContenedorDos = document.getElementById('container2');


let mensaje;
const btnValidar = document.getElementById('btnValidar');
const btnRegresar = document.getElementById('btnRegresar');

// onclick permite interactuar con el usuario brindando dinamismo a la pagina (manejo de eventos del dom)
btnValidar.addEventListener('click',(validacion)=>{  
// if anidado

    //obteniendo el valor del input
    const numeroTarjeta = document.getElementById('numero').value;

    //llamar a la función isvalid
    let resultadoFinal = validator.isValid(numeroTarjeta);

    const textoAlert = document.getElementById('textoAlert');
    //responder al ingreso vacío y solo usar caracteres numericos
    // operador logico or || verdadero si uno es verdadero
    if(numeroTarjeta === '' || (isNaN(numeroTarjeta) === true)){
        // cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá.
        validacion.preventDefault();
        // elimina una clase del elemento
        textoAlert.classList.remove('ocultar');
        // inserta texto sin formato (solo texto)
        textoAlert.textContent = 'Necesitas llenar este campo';
    }else{
        // añade o elimina varias clases a la vez Manipulacion dinamica del Dom
        ContenedorDos.classList.add('mostrar');
        ContenedorUno.classList.remove('mostrar');
        ContenedorUno.classList.add('ocultar');

        if(resultadoFinal===true){ 
            mensaje = '¡Tu solicitud de compra ha sido confirmada!';
            // manipulacion de strings. toUpperCase convierte todas las letras de la cadena en mayusculas
            mensaje= mensaje.toUpperCase();
            //obtiene un elemento por id
            document.getElementById("emoticon").src='img\\bears.gif';
      
        }else{
            mensaje= '¡Tu tarjeta no es válida!';
            // manipulacion de strings. toUpperCase convierte todas las letras de la cadena en mayusculas
            mensaje= mensaje.toUpperCase();
            //obtiene un elemento por id
            document.getElementById("emoticon").src='img\\sadbear.gif';
            // elimina una clase del elemento
            btnRegresar.classList.remove('ocultar');
        }
    }

    //llamar a la función maskify************************************************************************
    let numeroOculto = validator.maskify(numeroTarjeta);

    //mostrar los mensajes*******************************************************************************
    const mostrarMensaje = document.getElementById('mensaje');
    // inserta texto con formato html (se permiten etiquetas)
    mostrarMensaje.innerHTML = mensaje

    const mostrarResultado = document.getElementById('numeroOculto');
    // inserta texto con formato html (se permiten etiquetas)
    mostrarResultado.innerHTML = numeroOculto

    btnRegresar.addEventListener('click',()=>{
        ContenedorUno.classList.add('mostrar');
        ContenedorDos.classList.remove('mostrar');
    
        document.getElementById('numero').value = "";
        textoAlert.classList.add('ocultar');
        // inserta texto con formato html (se permiten etiquetas)
        textoAlert.innerHTML = "";
    })

});
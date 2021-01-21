  
const validator = {
  isValid:(numeroTarjeta)=>{
      const size = numeroTarjeta.length;
      const lastPosition = size-1;
      let textoInvertido = '';
      for(let i=lastPosition; i>=0; i--){
          textoInvertido = textoInvertido + numeroTarjeta[i];
      }
      const NewArray = Array.from(textoInvertido).map(Number);
      let listaImpares = [];

      for(let i=0; i<NewArray.length; i++){
          if(i%2!==0){
              listaImpares.push(NewArray[i]*2);
          }else{
              listaImpares.push(NewArray[i]*1);
          }
      }
      let lista2 = [];

      for(let i=0; i<listaImpares.length; i++){
          if(listaImpares[i]>=10){
          lista2.push((listaImpares[i]-10)+1);
          }else{
          lista2.push(listaImpares[i]*1);
          }
      }
      const total = lista2.reduce((sum, current) => sum + current, 0);

      let verificado = false;
      if(total%10===0){
          verificado = true
      }

      return verificado
  },

  maskify:(numeroTarjeta)=>{
      let maskify2 = '';
      for(let i=0; i<numeroTarjeta.length; i++){
          if(i<=numeroTarjeta.length-5){
              maskify2 = maskify2 + '#';
          }else{
              maskify2 = maskify2 + numeroTarjeta[i];
          }
      }
      return maskify2
  }
};

export default validator;





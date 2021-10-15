var puntos = 0;
function Jugar() {



    var RandomNumero = Math.floor(Math.random() * (10 - 1)) + 1;
    var RandomAnimal = Math.floor(Math.random() * (32 - 0)) + 0;
    var RandomBottonDesc = Math.floor(Math.random() * (6 - 1)) + 1;
    var RandomBotton1 = Math.floor(Math.random() * (10 - 1)) + 1;
    var RandomBotton2= Math.floor(Math.random() * (10 - 1)) + 1;
    var RandomBotton3 = Math.floor(Math.random() * (10 - 1)) + 1;
    var RandomBotton4 = Math.floor(Math.random() * (10 - 1)) + 1;



    // alert(RandomNumero);
    let animales = ["caballo.png", "cabra.png", "canguro.png", "caracol.png", "castor.png", "cerdo.png", "cocodrilo.png", "conejo.png", "gallina.png", "gallo.png", "hipopotamo.png"
        , "hipopotamo-2.png", "hipopotamo-3.png", "insecto.png", "insecto-2.png", "leon.png", "leopardo.png", "leopardo-2.png", "loro-2.png", "loro-3.png", "oso-panda.png", "oveja.png"
        , "pato.png", "pato-2.png", "pavo.png", "perro.png", "perro-2.png", "tortuga.png", "tortuga-2.png", "tortuga-3.png", "tucan.png", "zorro.png"];

    // alert(RandomAnimal);


    var tabla = document.getElementById('TablaJuego');
    tabla.innerHTML = '';

        var count = 0;
        for (let index = 0; index < RandomNumero; index++) {
            count++;

             if (count <= 3) {

                tabla.innerHTML += `
                
            <img class="imgRedonda animate__animated animate__backInDown animate__delay-1s" src="../../images/animales/${animales[RandomAnimal]}"> 
              
                `

            }else{
                tabla.innerHTML += `
              <p></p>  
             <img class="imgRedonda animate__animated animate__backInDown animate__delay-1s" src="../../images/animales/${animales[RandomAnimal]}"> 
               
                `
                count = 1;
            }



        }



        if (RandomBottonDesc==1) {
            tabla.innerHTML += `
            <p></p>  
            <ul class="actions CuerpoLogin">
	
            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomNumero})">${RandomNumero}</a></li>
    
            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton1})">${RandomBotton1}</a></li>

            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton2})">${RandomBotton2}</a></li>

            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton3})">${RandomBotton3}</a></li>
            

            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton4})">${RandomBotton4}</a></li>

    
									

            </ul>



             
              `
            }

            if (RandomBottonDesc==2) {
                tabla.innerHTML += `
                <p></p>  
        
                <ul class="actions CuerpoLogin">
    
                <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton1})">${RandomBotton1}</a></li>
                <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomNumero})">${RandomNumero}</a></li>
                <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton2})">${RandomBotton2}</a></li>

                <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton3})">${RandomBotton3}</a></li>
                

                <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton4})">${RandomBotton4}</a></li>
                </ul>
    
                 
                  `
                }
                if (RandomBottonDesc==3) {
                    tabla.innerHTML += `
                    <p></p>  
                    <ul class="actions CuerpoLogin">
    
                    <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton1})">${RandomBotton1}</a></li>
                    <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton2})">${RandomBotton2}</a></li>
                    <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomNumero})">${RandomNumero}</a></li>
                    <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton3})">${RandomBotton3}</a></li>
                    

                    <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton4})">${RandomBotton4}</a></li>
        
            
                    </ul>
                     
                      `
                    }
                    if (RandomBottonDesc==4) {
                        tabla.innerHTML += `
                        <p></p>  
                        <ul class="actions CuerpoLogin">
        
                        <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton1})">${RandomBotton1}</a></li>
                        <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton2})">${RandomBotton2}</a></li>
                        <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton3})">${RandomBotton3}</a></li>
                        
                        <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomNumero})">${RandomNumero}</a></li>
                        <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton4})">${RandomBotton4}</a></li>

            
                
                        </ul>
                         
                          `
                        }

                        if (RandomBottonDesc==5) {
                            tabla.innerHTML += `
                            <p></p>  
                            <ul class="actions CuerpoLogin">
            
                            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton1})">${RandomBotton1}</a></li>
                            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton2})">${RandomBotton2}</a></li>
                            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton3})">${RandomBotton3}</a></li>
                            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomBotton4})">${RandomBotton4}</a></li>

                            <li><a class="button" onclick="Ganador(${RandomNumero} , ${RandomNumero})">${RandomNumero}</a></li>
                
                            </ul>
                
                             
                              `
                            }





    }




function Ganador(Numero1 , Numero2){
  var modalBody = document.getElementById('modalBody');
  var Puntaje = document.getElementById('Puntaje');
  Puntaje.innerHTML = '';

if (Numero1 == Numero2) {
  puntos++;

  modalBody.innerHTML = '';
  modalBody.innerHTML += `
  <img class="imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/Estrella.png"> 
  <h3>! ! Felicidades ¡ ¡ </h3>
  <h1 class="section-tittle">Puntaje : ${puntos}</h1> 
     `

  $('#Modal_Puntaje').modal('show');



  Puntaje.innerHTML += `Puntaje : ${puntos} `

  Jugar();

}else{

  modalBody.innerHTML = '';
  modalBody.innerHTML += `
  <img class=" imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/CaraTriste.png"> 
  <h3>ups!! el numero correcto es : " ${Numero1} " </h3>
    
     `
  $('#Modal_Puntaje').modal('show');

  Puntaje.innerHTML += `Puntaje : ${puntos} `
  Jugar();
}



}

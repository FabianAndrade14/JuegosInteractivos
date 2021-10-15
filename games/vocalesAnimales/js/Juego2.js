var puntos = 0;
var letraA ="a";
var letraE ="e";
var letraI ="i";
var letraO ="o";
var letraU ="u";
let animales = ["oso-panda.png", "oveja.png","avestruz.png","elefante.png","unicornio.png" ,"abeja.png" ,"anillo.png" ,"araña.png","arbol.png" ,"arcoiris.png","ardilla.png",
"avion.png","elefante2.png","elefante3.png","escalera.png","escoba.png","estrella1.png","iglesia.png","iglu.png","iguana.png","iman.png","osoPanda.png","osoPardo.png","osoPardo2.png"
,"osoPolar.png" ,"oveja2.png","oveja3.png" , "unicornio2.png","uno.png","uva.png"];

function Jugar() {

    var RandomNumero = Math.floor(Math.random() * (10 - 1)) + 1;
    var RandomAnimal = Math.floor(Math.random() * (30 - 0)) + 0;
    var tabla = document.getElementById('TablaJuego');
    var LetraAnimal = VocalAnimal(animales[RandomAnimal]);


    tabla.innerHTML = '';
    tabla.innerHTML += `

    <img class="imgRedonda animate__animated animate__backInDown animate__delay-1s" src="../../images/animales/${animales[RandomAnimal]}"> 
    <p>
    <ul class="actions CuerpoLogin">
    <li><a class="button" onclick="Ganador('${LetraAnimal}' , '${letraA}')">${letraA}</a></li>
    <li><a class="button" onclick="Ganador('${LetraAnimal}' , '${letraE}')">${letraE}</a></li>
    <li><a class="button" onclick="Ganador('${LetraAnimal}' , '${letraI}')">${letraI}</a></li>
    <li><a class="button" onclick="Ganador('${LetraAnimal}' , '${letraO}')">${letraO}</a></li>
    <li><a class="button" onclick="Ganador('${LetraAnimal}' , '${letraU}')">${letraU}</a></li>
   
            
    </ul>
    </p>
      
       `

}


function VocalAnimal(cadena){

  var vocal = cadena.split("");
  return vocal[0];

}
    

function Ganador(vocal1 , vocal2){


  var modalBody = document.getElementById('modalBody');
  var Puntaje = document.getElementById('Puntaje');
  Puntaje.innerHTML = '';

if (vocal1 == vocal2) {
  puntos++;
  modalBody.innerHTML = '';
  modalBody.innerHTML += `
  <img class="imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/Estrella.png"> 
  <h3>! ! Felicidades ¡ ¡ </h3>
  <h1 class="section-tittle">Puntaje : ${puntos}</h1> 
     `



    $('#Modal_Puntaje').modal('show');
  Puntaje.innerHTML += `<h1 class="section-tittle">Puntaje : ${puntos}</h1>  `

  Jugar();


}else{
  modalBody.innerHTML = '';
  modalBody.innerHTML += `
  <img class=" imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/CaraTriste.png"> 
  <h3>ups!! la vocal correcta es : " ${vocal1} " </h3>
    
     `

  $('#Modal_Puntaje').modal('show');

  Puntaje.innerHTML += `<h1 class="section-tittle">Puntaje : ${puntos}</h1>  `
  Jugar();


  
}



}


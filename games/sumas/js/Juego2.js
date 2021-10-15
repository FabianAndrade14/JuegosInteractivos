var puntos = 0;
var num0 ="0";
var num1 ="1";
var num2 ="2";
var num3 ="3";
var num4 ="4";
var num5 ="5";
var num6 ="6";
var num7 ="7";
var num8 ="8";
var num9 ="9";
let animales = ["0.png", "1.png","2.png","3.png","4.png"];

function Jugar() {

    var RandomNumero = Math.floor(Math.random() * (5 - 1)) + 1;
    var RandomNum2 = Math.floor(Math.random() * (5 - 0)) + 0;
    var RandomNum1 = Math.floor(Math.random() * (5 - 0)) + 0;
    var tabla = document.getElementById('TablaJuego');
    var LetraAnimal = VocalAnimal(animales[RandomNum1]);
    var resultadoSuma =parseInt(animales[RandomNum1][0])+parseInt(animales[RandomNum2][0]);

    tabla.innerHTML = '';
    tabla.innerHTML += `

    <img class="imgRedonda animate__animated animate__backInDown animate__delay-1s" src="../../images/numeros/${animales[RandomNum2]}">
    <img class="imgRedonda animate__animated animate__backInDown animate__delay-1s" src="../../images/numeros/suma.png">
    <img class="imgRedonda animate__animated animate__backInDown animate__delay-1s" src="../../images/numeros/${animales[RandomNum1]}">
    <img width="200px" class="animate__animated animate__backInDown animate__delay-1s" src="../../images/numeros/igual.png">


    <p>
    <ul class="actions CuerpoLogin">
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num0}')">${num0}</a></li>
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num1}')">${num1}</a></li>
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num2}')">${num2}</a></li>
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num3}')">${num3}</a></li>
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num4}')">${num4}</a></li>


    </ul>

    <ul class="actions CuerpoLogin">
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num5}')">${num5}</a></li>
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num6}')">${num6}</a></li>
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num7}')">${num7}</a></li>
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num8}')">${num8}</a></li>
    <li><a class="button" onclick="Ganador('${resultadoSuma}' , '${num9}')">${num9}</a></li>

    </ul>
    </p>

       `

}


function VocalAnimal(cadena){

  var vocal = cadena.split("");
  return vocal[0];

}


function Ganador(vocal1 , vocal2){
  //alert(vocal1+"   ---->   "+vocal2)


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
  <h3>ups!! el número correcto es : " ${vocal1} " </h3>

     `

  $('#Modal_Puntaje').modal('show');

  Puntaje.innerHTML += `<h1 class="section-tittle">Puntaje : ${puntos}</h1>  `
  Jugar();



}



}

let animales = ["oso-panda.png", "oveja.png","avestruz.png","elefante.png","unicornio.png" ,"abeja.png" ,"anillo.png" ,"araña.png","arbol.png" ,"arcoiris.png","ardilla.png",
"avion.png","elefante2.png","elefante3.png","escalera.png","escoba.png","estrella1.png","iglesia.png","iglu.png","iguana.png","iman.png","osoPanda.png","osoPardo.png","osoPardo2.png"
,"osoPolar.png" ,"oveja2.png","oveja3.png" , "unicornio2.png","uno.png","uva.png"];
var NombreAnimal="";
contGanador=0;
var modalBody = document.getElementById('modalBody');
function cargarImagenes(){

    var cajaInicial = document.getElementById('cajaimagenes');

    for(var i = 0 ; i<10 ; i++){
        var RandomAnimal = Math.floor(Math.random() * (30 - 0)) + 0;
        cajaInicial.innerHTML += `<img id="imagen${i}" name="${animales[RandomAnimal]}" src="images/animales/${animales[RandomAnimal]}">`

    }

}

function VocalAnimal(cadena){

    var vocal = cadena.split("");
    return vocal[0];
  
  }


function iniciar() {

    cargarImagenes();

    var imagenes = document.querySelectorAll('#cajaimagenes > img');
    for (var i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }
    soltarCajaA = document.getElementById('cajasoltarA');
    soltarCajaE = document.getElementById('cajasoltarE');
    soltarCajaI = document.getElementById('cajasoltarI');
    soltarCajaO = document.getElementById('cajasoltarO');
    soltarCajaU = document.getElementById('cajasoltarU');

    //iniciar enventos cajaA
    soltarCajaA.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaA.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaA.addEventListener('drop', soltadoA, false);

    //iniciar enventos cajaE
    soltarCajaE.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaE.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaE.addEventListener('drop', soltadoE, false);
    //iniciar enventos cajaI
    soltarCajaI.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaI.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaI.addEventListener('drop', soltadoI, false);
    //iniciar enventos cajaO
    soltarCajaO.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaO.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaO.addEventListener('drop', soltadoO, false);
    //iniciar enventos cajaU
    soltarCajaU.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaU.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltarCajaU.addEventListener('drop', soltadoU, false);
}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
    NombreAnimal = elemento.getAttribute('name');
    console.log(NombreAnimal);
  
}

function soltadoA(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');


    if ("a" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);


        soltarCajaA.innerHTML += `<img id="${id}C" src="${src}">`
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
        contGanador++;
        ganador();
    }
    else {
        modalBody.innerHTML = '';
        modalBody.innerHTML += `
        <img class=" imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/CaraTriste.png"> 
        <h3>ups!! esa no es la vocal correcta </h3>`
        $('#Modal_Puntaje').modal('show');
    }

}

function soltadoE(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if ("e" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);

        soltarCajaE.innerHTML += `<img id="${id}C" src="${src}">`
        console.log(src);
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
        contGanador++;
        ganador();
    }
    else {

        modalBody.innerHTML = '';
        modalBody.innerHTML += `
        <img class=" imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/CaraTriste.png"> 
        <h3>ups!! esa no es la vocal correcta </h3>`
        $('#Modal_Puntaje').modal('show');
    }

}

function soltadoI(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if ("i" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);

        soltarCajaI.innerHTML += `<img id="${id}C" src="${src}">`
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
        contGanador++;
        ganador();
    }
    else {
        modalBody.innerHTML = '';
        modalBody.innerHTML += `
        <img class=" imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/CaraTriste.png"> 
        <h3>ups!! esa no es la vocal correcta </h3>`
        $('#Modal_Puntaje').modal('show');
    }

}


function soltadoO(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if ("o" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);

        soltarCajaO.innerHTML += `<img id="${id}C" src="${src}">`
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
        contGanador++;
        ganador();
    }
    else {
        modalBody.innerHTML = '';
        modalBody.innerHTML += `
        <img class=" imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/CaraTriste.png"> 
        <h3>ups!! esa no es la vocal correcta </h3>`
        $('#Modal_Puntaje').modal('show');
    }

}


function soltadoU(e) {
    e.preventDefault();
    var id = e.dataTransfer.getData('Text');
    if ("u" == VocalAnimal(NombreAnimal)) {
        var src = document.getElementById(id).src;
        console.log(id);

        soltarCajaU.innerHTML += `<img id="${id}C" src="${src}">`
        var image = document.getElementById(id);
        image.style.visibility = 'hidden';
        contGanador++;
        ganador();
    }
    else {

        modalBody.innerHTML = '';
        modalBody.innerHTML += `
        <img class=" imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/CaraTriste.png"> 
        <h3>ups!! esa no es la vocal correcta </h3>`

        $('#Modal_Puntaje').modal('show');
    }

}


function ganador(){

    console.log(contGanador);
    if (contGanador ==10) {
        modalBody.innerHTML = '';
        modalBody.innerHTML += `
        <img class="imgModal animate__animated animate__backInDown animate__delay-1s" src="../../images/Estrella.png"> 
        <h3>! ! Felicidades ¡ ¡ </h3>
        <h1 class="section-tittle">Puntaje : ${contGanador}</h1> `
        $('#Modal_Puntaje').modal('show');
    }

}

window.addEventListener('load', iniciar, false);
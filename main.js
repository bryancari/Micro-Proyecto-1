const slider = document.querySelector("#carrusel");
let SelectorCarrusel = document.querySelectorAll(".carrusel-section");
let ultimaSeleccion = SelectorCarrusel[SelectorCarrusel.length-1];

const botonDerecho = document.querySelector(".carrusel-btn-derecho");
const botonIzquierdo = document.querySelector(".carrusel-btn-izquierdo");

slider.insertAdjacentElement("afterbegin", ultimaSeleccion);

function moverDerecha() {
    let carruselPrimeraEleccion = document.querySelectorAll(".carrusel-section");
    slider.style.marginLeft = "200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",carruselPrimeraEleccion);    
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moverIzquierda() {
    let carruselultimaSeleccion = document.querySelectorAll(".carrusel-section");
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", carruselultimaSeleccion);
        slider.style.marginLeft = "-100%";
    }, 500);
}


botonDerecho.addEventListener("click",moverIzquierda);
botonIzquierdo.addEventListener("click",moverDerecha);



let json = '{ "skill":"Python" , "value":"75" },' +
'{ "skill":"Java" , "value":"75" },' +
'{ "skill":"CSS" , "value":"30" },' +
'{ "skill":"HTML" , "value":"35" },' +
'{ "skill":"Javascript" , "value":"25" } ]}';

document.getElementById("skillList").onload = agregarHabilidad;

let espacio = JSON.parse(json);

function agregarHabilidad() {
    for (var i=0;i<5;i++) {
        
        let newLi = document.createElement("li");
        let newDiv = document.createElement("div");
        let newContent = document.createElement("p");
        let newBar = document.createElement("progress");

        let habilidad = document.createTextNode(espacio.skill);        
        let valor = document.createTextNode(espacio.value);

        newContent.appendChild(habilidad);
        newBar.appendChild(valor);
        newBar.setAttribute("value",valor);

        newDiv.appendChild(newContent);
        newDiv.appendChild(newBar);

        newLi.appendChild(newDiv);
        
        document.getElementById("skillList").appendChild(newLi);
    }
    
};




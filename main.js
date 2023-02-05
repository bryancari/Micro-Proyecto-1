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
    
}





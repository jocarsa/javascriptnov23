// JVCalendario (c) 2023 Jose Vicente Carratala
// Declaro array meses
meses = ['','enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
// Creo una cadena vacía de texto
var cadenadetexto = ""

var fechadehoy = new Date();
var mesactual = fechadehoy.getMonth()+1;
var añoactual = fechadehoy.getFullYear();
// Pongo la fecha real en la cabecera
document.querySelector("#jvmes").innerHTML = meses[mesactual];
document.querySelector("#jvaño").innerHTML = añoactual;
// Añado los días vacíos del principio del mes
var primerdiadeestemes = new Date(fechadehoy.getFullYear(), fechadehoy.getMonth(), 1);
var primerdia = primerdiadeestemes.getDay();
for(let dia = 0;dia<primerdia;dia++){
    cadenadetexto += "<div class='dia'>.</div>";
}
// Quiero saber cuántos días hay en el mes:
var diasdelmes = new Date(fechadehoy.getFullYear(), fechadehoy.getMonth()+1, 0).getDate();
// Para cada uno de los días del mes, lo añado la cadena
for(let dia = 1;dia<=diasdelmes;dia++){
    cadenadetexto += "<div class='dia'>"+dia+"</div>";
}
// Lo pongo dentro del contenedor
document.querySelector("#jvcalendario #jvcuerpo").innerHTML = cadenadetexto
// Escucho los botones
document.querySelector("#jvcalendario #controles #anterior").onclick = function(){
    console.log("Has seleccionado el mes anterior");
}
document.querySelector("#jvcalendario #controles #siguiente").onclick = function(){
    console.log("Has seleccionado el mes siguiente");
}
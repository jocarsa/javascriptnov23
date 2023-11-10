// JVCalendario (c) 2023 Jose Vicente Carratala
// Creo una cadena vacía de texto
var cadenadetexto = ""
// Añado los días vacíos del principio del mes
var fechadehoy = new Date();
var primerdiadeestemes = new Date(fechadehoy.getFullYear(), fechadehoy.getMonth(), 1);
var primerdia = primerdiadeestemes.getDay();
for(let dia = 0;dia<primerdia;dia++){
    cadenadetexto += "<div class='dia'>.</div>";
}

// Para cada uno de los días del mes, lo añado la cadena
for(let dia = 1;dia<=31;dia++){
    cadenadetexto += "<div class='dia'>"+dia+"</div>";
}
// Lo pongo dentro del contenedor
document.querySelector("#jvcalendario").innerHTML = cadenadetexto
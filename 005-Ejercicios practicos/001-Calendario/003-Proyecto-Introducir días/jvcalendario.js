// JVCalendario (c) 2023 Jose Vicente Carratala
// Creo una cadena vacía de texto
var cadenadetexto = ""
// Para cada uno de los días del mes, lo añado la cadena
for(var dia = 1;dia<=31;dia++){
    cadenadetexto += "<div class='dia'>"+dia+"</div>"
}
// Lo pongo dentro del contenedor
document.querySelector("#jvcalendario").innerHTML = cadenadetexto
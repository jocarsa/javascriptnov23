// JVCalendario (c) 2023 Jose Vicente Carratala
function presentaCalendario(mimes,miaño){
    // Antes que nada vacío el contenedor
    document.querySelector("#jvcalendario #jvcuerpo").innerHTML = ""
    // Declaro array meses
    meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
    // Creo una cadena vacía de texto
    var cadenadetexto = ""

    var mesactual = mimes;
    var añoactual = miaño;
    // Pongo la fecha real en la cabecera
    document.querySelector("#jvmes").innerHTML = meses[mesactual];
    document.querySelector("#jvaño").innerHTML = añoactual;
    // Añado los días vacíos del principio del mes
    var primerdiadeestemes = new Date(miaño, mimes, 1);
    var primerdia = primerdiadeestemes.getDay();
    if(primerdia == 0){primerdia = 7;}
    for(let dia = 0;dia<primerdia-1;dia++){
        cadenadetexto += "<div class='dia'>.</div>";
    }
    // Quiero saber cuántos días hay en el mes:
    var diasdelmes = new Date(miaño, mimes+1, 0).getDate();
    // Para cada uno de los días del mes, lo añado la cadena
    for(let dia = 1;dia<=diasdelmes;dia++){
        cadenadetexto += "<div class='dia'>"+dia+"</div>";
    }
    // Lo pongo dentro del contenedor
    document.querySelector("#jvcalendario #jvcuerpo").innerHTML = cadenadetexto
    // Pruebo a escuchar de forma estática
    var dias = document.querySelectorAll(".dia")
    // Pongo un escuchador para cada uno de los elementos
    for(var i = 0;i<dias.length;i++){
        dias[i].onclick = function(){
            console.log("Has hecho click")
        }
    }
}
```javascript
// JVCalendario (c) 2023 Jose Vicente Carratala
function presentaCalendario(mimes, miaño) {
    // Antes que nada, vacío el contenedor
    document.querySelector("#jvcalendario #jvcuerpo").innerHTML = "";
    // Declaro array meses
    meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    // Creo una cadena vacía de texto
    var cadenadetexto = "";

    var mesactual = mimes;
    var añoactual = miaño;
    // Pongo la fecha real en la cabecera
    document.querySelector("#jvmes").innerHTML = meses[mesactual];
    document.querySelector("#jvaño").innerHTML = añoactual;
    // Añado los días vacíos del principio del mes
    var primerdiadeestemes = new Date(miaño, mimes, 1);
    var primerdia = primerdiadeestemes.getDay();
    for (let dia = 0; dia < primerdia; dia++) {
        cadenadetexto += "<div class='dia'>.</div>";
    }
    // Quiero saber cuántos días hay en el mes:
    var diasdelmes = new Date(miaño, mimes + 1, 0).getDate();
    // Para cada uno de los días del mes, lo añado a la cadena
    for (let dia = 1; dia <= diasdelmes; dia++) {
        cadenadetexto += "<div class='dia'>" + dia + "</div>";
    }
    // Lo pongo dentro del contenedor
    document.querySelector("#jvcalendario #jvcuerpo").innerHTML = cadenadetexto;
}

// Cuando el programa arranca, me tiene que mostrar la fecha de hoy
var fechadehoy = new Date();
var mesdehoy = fechadehoy.getMonth();
var añodehoy = fechadehoy.getFullYear();
console.log(mesdehoy + " - " + añodehoy);
presentaCalendario(mesdehoy, añodehoy);

// Escucho los botones
document.querySelector("#jvcalendario #controles #anterior").onclick = function () {
    console.log("Has seleccionado el mes anterior");
};

document.querySelector("#jvcalendario #controles #siguiente").onclick = function () {
    console.log("Has seleccionado el mes siguiente");
};
```

En esta versión del archivo "jvcalendario.js", se ha encapsulado la lógica de presentación del calendario dentro de la función `presentaCalendario`. Además, se ha utilizado esta función para mostrar el calendario con la fecha actual al iniciar el programa. La función ahora toma los parámetros `mimes` y `miaño` para permitir la presentación de cualquier mes y año. No hay cambios en los archivos HTML y CSS en esta versión. ¿Necesitas comentarios sobre alguna otra versión o archivo?
```javascript
// Cuando el programa arranca, me tiene que mostrar la fecha de hoy
var fechadehoy = new Date();
var mesdehoy = fechadehoy.getMonth();
var añodehoy = fechadehoy.getFullYear();
presentaCalendario(mesdehoy, añodehoy);

// Escucho los botones
document.querySelector("#jvcalendario #controles #anterior").onclick = function () {
    mesdehoy--;
    if (mesdehoy < 0) {
        mesdehoy = 11;
        añodehoy--;
    }
    presentaCalendario(mesdehoy, añodehoy);
    console.log("Has seleccionado el mes anterior");
};

document.querySelector("#jvcalendario #controles #siguiente").onclick = function () {
    mesdehoy++;
    if (mesdehoy > 11) {
        mesdehoy = 0;
        añodehoy++;
    }
    presentaCalendario(mesdehoy, añodehoy);
    console.log("Has seleccionado el mes siguiente");
};
```

En esta versión del archivo "jvcalendario.js", se ha modificado el código que maneja los eventos de clic en los botones "anterior" y "siguiente". Ahora, al llegar al extremo de los meses (enero o diciembre), se ajusta el mes y el año correspondientemente para permitir una navegación continua. También se ha actualizado la impresión de mensajes en la consola para reflejar estos cambios. ¿Necesitas comentarios sobre alguna otra versión o archivo?
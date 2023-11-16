```javascript
// Cuando el programa arranca, me tiene que mostrar la fecha de hoy
var fechadehoy = new Date();
var mesdehoy = fechadehoy.getMonth();
var añodehoy = fechadehoy.getFullYear();
presentaCalendario(mesdehoy, añodehoy);

// Escucho los botones
document.querySelector("#jvcalendario #controles #anterior").onclick = function () {
    mesdehoy--;
    presentaCalendario(mesdehoy, añodehoy);
    console.log("Has seleccionado el mes anterior");
};

document.querySelector("#jvcalendario #controles #siguiente").onclick = function () {
    mesdehoy++;
    presentaCalendario(mesdehoy, añodehoy);
    console.log("Has seleccionado el mes siguiente");
};
```

En esta versión del archivo "jvcalendario.js", se ha añadido código para escuchar los eventos de clic en los botones "anterior" y "siguiente" en el calendario. Al hacer clic en estos botones, se ajusta el mes actual y se vuelve a llamar a la función `presentaCalendario` para actualizar la visualización del calendario con el mes anterior o siguiente. Se imprime un mensaje en la consola para indicar la acción realizada. No hay cambios en los archivos HTML y CSS en esta versión. ¿Necesitas comentarios sobre alguna otra versión o archivo?
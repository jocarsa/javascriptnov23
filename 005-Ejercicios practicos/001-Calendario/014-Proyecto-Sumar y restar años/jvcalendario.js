// Cuando el programa arranca, me tiene que mostrar la fecha de hoy
var fechadehoy = new Date()
var mesdehoy = fechadehoy.getMonth()
var añodehoy = fechadehoy.getFullYear();
presentaCalendario(mesdehoy,añodehoy)

// Escucho los botones
document.querySelector("#jvcalendario #controles #anterior").onclick = function(){
    mesdehoy--
    if(mesdehoy < 0){
        mesdehoy = 12
        añodehoy--
    }
    presentaCalendario(mesdehoy,añodehoy)
    console.log("Has seleccionado el mes anterior");
}
document.querySelector("#jvcalendario #controles #siguiente").onclick = function(){
    mesdehoy++
    if(mesdehoy > 11){
        mesdehoy = 0
        añodehoy++
    }
    presentaCalendario(mesdehoy,añodehoy)
    console.log("Has seleccionado el mes siguiente");
}
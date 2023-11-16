// Cuando el programa arranca, me tiene que mostrar la fecha de hoy
var fechadehoy = new Date()
var mesdehoy = fechadehoy.getMonth()
var añodehoy = fechadehoy.getFullYear();
presentaCalendario(mesdehoy,añodehoy)

// Escucho los botones
document.querySelector("#jvcalendario #controles #anterior").onclick = function(){
    mesdehoy--
    if(mesdehoy < 0){
        mesdehoy = 11
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
// Escuchador para cerrar el modal con el boton de la X
document.getElementById("jvcerrarmodal").onclick = function(){
    document.getElementById("jvfondomodal").style.display = "none"
}
// Escuchador para cerrar el modal usando la tecla de escape
window.onkeydown = function(e){
    console.log(e.keyCode)
    if (e.keyCode === 27) {
        document.getElementById("jvfondomodal").style.display = "none"        
    }
}
// Tomo los datos del modal (para crear un nuevo evento)
document.getElementById("jvenvia").onclick = function(){
    console.log("Recojo los datos del modal")
}












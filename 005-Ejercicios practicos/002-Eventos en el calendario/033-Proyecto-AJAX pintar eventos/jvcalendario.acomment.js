Las novedades introducidas son:

1. **Carga de eventos desde el servidor al inicio:** Se utiliza `fetch` para obtener eventos desde el archivo `eventos.json` del servidor al iniciar el programa. Los eventos obtenidos se convierten a JSON y se asignan a la variable `eventos`. Esto se realiza para cargar cualquier evento existente en el servidor y asegurarse de que se muestren en el calendario si existen eventos previamente guardados.

```javascript
var eventos = [];
fetch("eventos.json")
    .then(response => {
        return response.json();
    })
    .then(misdatos => {
        eventos = misdatos;
    });
```

2. **Envío de eventos al servidor:** Después de agregar un nuevo evento a la lista `eventos`, se utiliza `fetch` para enviar la lista actualizada de eventos al archivo `guardaeventos.php` en el servidor. Se convierte la lista de eventos (`eventos`) a una cadena JSON mediante `JSON.stringify` y se realiza una petición GET a `guardaeventos.php` pasando la cadena de eventos como parámetro en la URL.

```javascript
document.getElementById("jvenvia").onclick = function(){
    // ... (código previo)
    let eventosString = JSON.stringify(eventos);
    fetch("guardaeventos.php?eventos=" + encodeURIComponent(eventosString));
}
```

Estas modificaciones permiten cargar eventos existentes al inicio del programa y guardar los eventos actualizados en el servidor después de agregar uno nuevo.
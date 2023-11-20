Las novedades en este código son:

1. **Carga de eventos al iniciar:** Se utiliza `fetch` para obtener eventos desde el archivo `eventos.json` del servidor al iniciar el programa. Una vez obtenidos los datos, se actualiza la lista de eventos (`eventos`) con estos datos y se llama a la función `presentaCalendario` para mostrar el calendario con los eventos obtenidos, utilizando el mes y el año actual (`mesdehoy` y `añodehoy`).

```javascript
fetch("eventos.json")
    .then(response => {
        return response.json();
    })
    .then(misdatos => {
        eventos = misdatos;
        presentaCalendario(mesdehoy, añodehoy);
    });
```

Al cargar los eventos al principio, aseguras que el calendario se muestre con los eventos existentes en el archivo `eventos.json`.

2. **Actualización del calendario al cargar eventos:** Luego de cargar los eventos desde el servidor, se llama a la función `presentaCalendario` con el mes y el año actuales (`mesdehoy` y `añodehoy`). Esto garantiza que el calendario se actualice y muestre los eventos obtenidos.

Estas adiciones permiten cargar y mostrar eventos existentes al iniciar la aplicación, proporcionando una mejor experiencia al usuario al mostrar los eventos guardados previamente.
El código que proporcionaste contiene una serie de funciones y eventos que interactúan con el calendario previamente creado. Aquí está una explicación de las secciones que realizan acciones específicas:

1. **Mostrar la fecha de hoy al iniciar el programa:**
   - Se obtiene la fecha actual con `new Date()`.
   - Se capturan el mes y el año de la fecha actual usando `getMonth()` y `getFullYear()`.
   - Luego, la función `presentaCalendario(mesdehoy, añodehoy)` se invoca con estos valores para mostrar el calendario correspondiente al mes actual.

2. **Escuchadores de eventos para los botones de control:**
   - Se asignan funciones a los botones "anterior" y "siguiente" para cambiar el mes mostrado en el calendario.
   - Al hacer clic en el botón "anterior", se disminuye el mes y, si el mes es menor que 0, se ajusta al último mes del año anterior.
   - Al hacer clic en el botón "siguiente", se aumenta el mes y, si el mes es mayor que 11, se ajusta al primer mes del año siguiente.
   - Después de cada cambio, se llama a `presentaCalendario(mesdehoy, añodehoy)` con los nuevos valores de mes y año para actualizar el calendario mostrado.

3. **Escuchador para cerrar el modal con el botón "X":**
   - Se asigna una función al hacer clic en el elemento con el id "jvcerrarmodal" para ocultar el modal `jvfondomodal` estableciendo su estilo `display` a "none".

4. **Escuchador para cerrar el modal usando la tecla "Escape" (código 27):**
   - Se agrega un escuchador de eventos a la ventana (`window.onkeydown`) que verifica si se presiona la tecla "Escape" (código 27) y, en caso afirmativo, oculta el modal.

5. **Evento para tomar los datos del modal (crear un nuevo evento):**
   - Un evento de clic se asigna al elemento con el id "jvenvia". Sin embargo, parece estar vacío (`function(){}`), por lo que actualmente no realiza ninguna acción específica.

En resumen, este código establece la lógica para mostrar y controlar el calendario, así como para manejar un modal asociado para la creación de nuevos eventos, aunque actualmente esta funcionalidad está vacía.
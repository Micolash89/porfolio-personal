# Portfolio Page - Javier Espindola

Este es página de portafolio personal desarrollada por Javier Espindola. La página está diseñada para mostrar información personal, habilidades, formacion y proyectos recientes y es completamente **responsive** para adaptarse a diferentes tamaños de pantalla.

## Deploy del Proyecto

**_Github Pages_** : https://micolash89.github.io/porfolio-personal/

## Estructura del Proyecto

El proyecto sigue una estructura HTML básica con secciones para Home, Servicios, Trabajos Recientes y Contacto. También incluye un archivo CSS para estilos y un par de scripts JavaScript para funcionalidades interactivas.

## Funcionalidades Destacadas

1. **Barra de Navegación Interactiva:** La barra de navegación permite navegar entre las secciones de la página y presenta un botón para cambiar el tema.

2. **Sección de Servicios con Modales:** Cada servicio tiene un botón "Conocer Más" que muestra información adicional en un modal.

3. **Trabajos Recientes:** Muestra proyectos recientes con imágenes y enlaces a las páginas correspondientes.

4. **Testimonios en un Carrusel:** Presenta formación en un carrusel interactivo.

5. **Botón de Contacto:** Incluye un botón que redirige a la página de contacto.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- [Swiper.js](https://swiperjs.com/) para el carrusel de formación.

## Formulario de contacto

Implementé un formulario de contacto para facilitar la comunicación directa conmigo. Utilicé una hoja de cálculo de Google para almacenar los mensajes que recibo a través del formulario. Además, configuré un sistema automatizado para enviar un correo electrónico de confirmación después de que se envíe un mensaje exitosamente. Esta solución me permite gestionar eficientemente las consultas y comentarios que recibo, manteniendo un registro organizado de las interacciones.

### Estructura de la hoja de calculo

| timestamp | Email | name | message |
| --------- | ----- | ---- | ------- |

### Script para googlesheets

```
var sheetName = 'email'/* nombre de la hoja*/
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      if (header === 'timestamp') {
        return new Date();
      } else if (header === 'name') {
        return e.parameter['name'];
      } else if (header === 'message') {
        return e.parameter['message'];
      } else {
        return e.parameter[header];
      }
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    var subject = 'Nuevo mensaje recibido';
    var message = 'Se ha recibido un nuevo mensaje.\n\nNombre: ' + e.parameter['name'] + '\nMensaje: ' + e.parameter['message'] + '\nEmail: ' + e.parameter['Email'];
    var recipient = 'email@example.com'; // Reemplaza con tu dirección de correo electrónico
    MailApp.sendEmail(recipient, subject, message);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```

- [Link](https://www.youtube.com/watch?v=a8Om25FbaJA&t=1049s) para mas información acerca de googlesheets.

## capturas

<p align='center'>
<img src="/img/desktop-inicio.jpg" alt="Inicio" width="75%"/>
<img src="/img/desktop-porfolio.jpg" alt="Inicio" width="75%"/>
<img src="/img/desktop-contact.jpg" alt="Inicio" width="75%"/>
<img src="/img/mobile-iu.jpg" alt="Inicio" width="75%"/>
</p>

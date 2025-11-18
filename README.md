# Sprint 5 - ImageGallery

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-TS-blue?style=for-the-badge)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-Jasmine-8A4Baf?style=for-the-badge&logo=jasmine&logoColor=white)

## Descripción de la Aplicación:

Este proyecto Angular es una galería de imágenes y tiene dos componentes principales:
- `ImageComponent`: muestra una sola imagen y un botón para eliminarla
- `GalleryComponent`: muestra y ordena todas las imágenes, permite ampliarlas, eliminarlas o moverlas con drag-and-drop

Se puede:
- Mostrar un mensaje si falta la URL de la imagen
- Ver una imagen en grande al hacer click
- Eliminar cualquier imagen
- Arrastrar y soltar imágenes para reordenarlas

--- 

## Tecnologías

- HTML y CSS (con Tailwind para estilos)
- TypeScript
- Angular 20 (standalone components, signals)
- @angular/cdk para el drag-and-drop

---

## Estructura del Proyecto:

```bash
src/
 └─ app/
     ├─ components/
     │   ├─ image/
     │   │   ├─ image.ts
     │   │   ├─ image.html
     │   │   └─ image.css
     │   └─ gallery/
     │       ├─ gallery.ts
     │       ├─ gallery.html
     │       └─ gallery.css
     └─ models/
         └─ imageModel.ts

```

---

## Instalación del proyecto

1. Clonar el proyecto

```bash
git clone https://github.com/JordiMiravet/Bootcamp-S5.git
```

2. Instalar dependencias

```bash
npm install
```

3. Correr la aplicación

```bash
ng serve
```

4. Abrir en el navegador en http://localhost:4200

---

## Componentes:

### **`components/image`**

- Muestra una sola imagen que le pasa el componente padre cada vez que se llama
- Al hacer hover, aparece el botón de eliminar y al apretarlo, se dispara un evento que el padre captura para eliminar la imagen
- Al clicar sobre la imagen, se expande, al clicar fuera, se cierra

#### Propiedades basicas:

- `@Input() image` : La imagen a mostrar
- `@Output() deleteImage` : Evento que se dispara al eliminar la imagen

#### Funciones:

- `deleteImageClick` : Emite el evento al Padre


### **`components/gallery`**

- Muestra varias imágenes en una galería, permite ampliarlas, eliminarlas y reordenarlas
- Destaca la primera imagen (images[0]) en escritorio ocupando más espacio (2x2)
- Muestra un mensaje “Imagen no disponible” si falta la URL.

#### Propiedades basicas:

- `images` : Lista de imágenes.
- `displayImage`: Si se está viendo una imagen ampliada.
- `activeImage` : Imagen que se está viendo grande.

#### Funciones:

- `openImage(image)` — Al clicar sobre la imagen la abre.
- `closeImage()` — Al clicar sobre el fondo cierra la imagen.
- `handleDelete(image)` — Borra una imagen
- `drop(event)` — Cambia el orden de las imágenes.

---

## Decisiones del proyecto

Durante el desarrollo tomé distintas decisiones técnicas para estructurar y mejorar la galería:

1. Componente base:
Al encarar el Sprint, decidí que el elemento mínimo del proyecto debía ser una imagen individual, por lo que enfoqué primero el `ImageComponent` y su responsabilidad mas básica. Además, como el enunciado pedía destacar una imagen, opté por resaltar siempre la primera del array (`images[0]`) por razones técnicas y estéticas, aunque me habría gustado explorar un sistema de “destacados” seleccionable por el usuario.

2. Manejo de imágenes sin URL:
Añadí un mensaje de error cuando falta la URL de una imagen. Esto me permitió probar la lógica `@if/@else` y la nueva manera de recorrer listas en el `HTML`, que me pareció intuitiva e imaginativa.

3. Ampliar imágenes:
Para experimentar con los eventos entre componentes, implementé que al clicar una imagen esta se ampliara y al clicar fuera de la imagen ampliada, se dispara otro evento para cerrarla. Esta funcionalidad no estaba en el briefing, pero decidí añadirla para reforzar mi comprensión del flujo de eventos en `Angular`.

4. Eliminación de imágenes:
Seguí el enfoque indicado: el hijo emite un evento (`deleteImage`) y el padre elimina la imagen.
Busqué un icono de papelera minimalista y lo coloqué en la esquina superior derecha. Para no romper la estética neutra de la galería, decidí ocultarlo hasta que se hace hover sobre la imagen.

5. Reordenación con `Drag & Drop`:
Tras revisar la documentación de `@angular/cdk`, opté por la estrategia [List Wrapping](https://material.angular.dev/cdk/drag-drop/overview), que permite arrastrar y recolocar imágenes respetando el diseño de la galería.
Me resultó más sencillo de implementar de lo que esperaba, aunque implicaba una complejidad que no imaginé al leer el briefing inicialmente, talvez porque aún no me habia hecho a la estructura de `Angular`.

6. Organización y flujo del proyecto
A medida que el proyecto crecía —con eventos, TypeScript, signals, clases y tipado— la lectura del código se volvió más desafiante. Sin embargo, con cada revisión se hizo más comprensible. Aunque `Angular` cambió mi forma habitual de razonar la estructura de un proyecto y lo recolocó a su voluntad, siento que empiezo a seguir el flujo de manera algo más natural.

---

## Vista previa del proyecto:

1. **Zoom In - Zoom Out**

![Zoom In / Out](assets/readme_images/ZoomIn_ZoomOut.gif)

2. **Delete**

![Delete](assets/readme_images/Delete.gif)

3. **Drag and Drop**

![Drag and Drop](assets/readme_images/DragAndDrop.gif)

---

## Autor

```text
Jordi Miravet – Bootcamp S5 : Angular - Image Gallery
```

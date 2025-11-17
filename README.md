# Sprint 5 - ImageGallery

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-TS-blue?style=for-the-badge)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-Jest-blue?style=for-the-badge)


## Descripcion de la Aplicación: 

Este proyecto Angular es una galería de imágenes y tiene dos componentes principales:
- `ImageComponent`: muestra una sola imagen y un botón para eliminarla
- `GalleryComponent`: muestra y ordena todas las imágenes, permite ampliarlas, eliminarlas o moverlas con drag-and-drop

Se puede:
- Mostrar un mensaje si falta la URL de la imagen
- Ver una imagen en grande al hacer click
- Eliminar cualquier imagen
- Arrastrar y soltar imágenes para reordenarlas

## Técnologias

- HTML y CSS (con Tailwind para estilos)
- TypeScript
- Angular 20 (standalone components, signals)
- @angular/cdk para el drag-and-drop

---

### Estructura del Proyecto:

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

### Componentes:

#### `components/image`

- Muestra una sola imagen que le pasa el componente padre cada vez que se llama
- Al hacer hover, aparece el botón de eliminar y al apretarlo, se dispara un evento que el padre captura para eliminar la imagen
- Al clicar sobre la imagen, se expande, al clicar fuera, se cierra

##### Propiedades basicas:

- `@Input() image` : La imagen a mostrar
- `@Output() deleteImage` : Evento que se dispara al eliminar la imagen

**Ejemplo de uso :**
```typescript
<app-image 
  [image]="image" 
  (deleteImage)="handleDelete($event)"
></app-image>
```

---

#### `components/gallery`

- Muestra varias imágenes en una galería, permite ampliarlas, eliminarlas y reordenarlas
- Destaca la primera imagen (images[0]) en escritorio ocupando más espacio (2x2)
- Muestra un mensaje “Imagen no disponible” si falta la URL.

##### Propiedades basicas:

- `images` : Lista de imágenes.
- `displayImage`: Si se está viendo una imagen ampliada.
- `activeImage` : Imagen que se está viendo grande.

##### Funciones:

- `openImage(image)` — Al clicar sobre la imagen la abre.
- `closeImage()` — Al clicar sobre el fondo cierra la imagen.
- `handleDelete(image)` — Borra una imagen
- `drop(event)` — Cambia el orden de las imágenes.

---

##### Decisiones del proyecto

Mi primera decisión ha sido entender el componente mas básico y su tarea, en este sentido he querido entender que al ser una galeria, el componente minimo era una imagen, al encontrarme durante el ejercicio que deberia de destacar una de ellas por encima de las demás, decido que fuera la primera del array [0] por motivos técnicos y de estilo (y por lo que he ido viendo, creo que ha sido una buena decision (aunque me he quedado con las ganas de probar el "destacados" mediante seleccion del usuario)).
Dicho lo cual, finalmente también decido mostrar un mensaje si falta la URL de la imagen (prueba de caso de error en el que he aprovechado y probado la logica @if/@else del HTML (y en este sentido me ha parecido curiosa la nueva manera en la que se recorre y muestra un array dentro precisa y extrañamente del HTML, lo he sentido claro e imaginativo en este punto)). 

Al empezar a entender un poco el componente intento ponerme creativo para verificar mis recien adquiridos conocimientos, así que me pongo a probar a ampliar imagenes segun son seleccionada, el evento (que lo dispongo como si la imagen misma fuera el activador de este) dispara una funcion que es escuchada por el padre para que este la muestre en grande. Del mismo modo una vez ampliada, al clicar en el fondo se dispara otro evento que la cierra (esta parte la implementé por probar, no estaba en la escaleta del ejercicio, pero como he dicho quería experimentarla para entender un poco mas como funcionaban los eventos y cual era su recorrido en Angular). 

Para la eliminación de imagenes decido (no se si con buen tino) que el evento sea disparado por el hijo y recogido por el padre, en este caso (siguiendo las indicaciónes del briefing) busqué un icono de trash minimalista y decido colocarlo en la parte superior derecha de la imagen y para no perturbar el estilo general añadiendo ruido y color, decido esconderlo mientras no se hace hover sobre esta, así al visualizar la galeria esta se muestra con su estilo b/n sobrio y neutro.

Para el drag-and-drop de @angular/cdk, al revisar su documentación para distintos tipos de eventos. Finalmente me decido por el "List wrapping" [Info](https://material.angular.dev/cdk/drag-drop/overview) que permite agarrar, mover y soltar imágenes para recolocarlas en el layout de la galería, permitiendome conservar el estilo distributivo de esta. En este apartado debo resaltar que me ha parecido mas facil de lo que me pensaba (talvez porque era una libreria y los componentes traen sus propias acciones predefinidas), pero aún y así recoge una complegidad que no habia valorado al leer el briefing por primera vez (lo habia imaginado diferente en mi cabeza, talvez pensando aún en un estilo javascript vanilla).

Al sincerarme sobre el recorrido deste trabajo (eventos que llaman a otros componentes y estos a su vez disparan una funcion, el añadido del typescript que aún lo siento endeble entre mis conocimientos y que le añaden verbosidad al codigo, eventos reactivos, los signal, volver a reconectarme con las clases (y modificar elementos mediante seters), etc), despues de todo el codigo, al releerlo cada vez que volvia a ponerme me ha resultado dificil de seguir (aunque debo destacar que cada vez me ha ido pasando menos), en este sentido le achaco la sensacion a que Angular a desestructurado mi orden mental a la hora de seguir la logica del codigo y lo ha recolocado a su voluntad, del mismo modo entiendo que empezaré a seguir el hilo cada vez de manera mas natural, aunque en mi sigue habiendo un patrón de miedo y suspense por no saber si he adquirido correctamente los conocimientos, aunque reconozco para mi tranquilidad que esta semana he aprendido varios elementos y mucha sintaxis y con eso intento quedarme.

---

## Autor

```text
Jordi Miravet – Bootcamp S5 : Angular - Image Gallery
```

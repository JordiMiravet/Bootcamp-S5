import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModel } from '../../models/imageModel';
import { ImageComponent } from '../image/image';
import { DragDropModule, CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageComponent,CdkDrag, CdkDropList, DragDropModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})

export class GalleryComponent {

  IMAGE_PATH : string = "https://picsum.photos/";
  IMAGE_WIDTH : string = "400/600";
  IMAGE_TYPE : string = "?grayscale&seed=";

  images = signal<ImageModel[]>([
    { id: 1, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}1`, description: 'Imagen 1', featured: true },
    { id: 2, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}2`, description: 'Imagen 2' },
    { id: 3, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}3`, description: 'Imagen 3' },
    { id: 4, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}4`, description: 'Imagen 4' },
    { id: 5, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}5`, description: 'Imagen 5' },
    { id: 6, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}6`, description: 'Imagen 6' },
    { id: 7, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}7`, description: 'Imagen 7' },
    { id: 8, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}8`, description: 'Imagen 8' },
    { id: 9, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}9`, description: 'Imagen 9' },
    { id: 10, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}10`, description: 'Imagen 10' },
    { id: 11, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}11`, description: 'Imagen 11' },
    { id: 12, url: `${this.IMAGE_PATH}${this.IMAGE_WIDTH}${this.IMAGE_TYPE}12`, description: 'Imagen 12' },
  ]);

  displayImage = signal(false);
  activeImage: ImageModel | null = null;
  IMAGE_FEATURED : number = 0;

  openImage(image: ImageModel) {
    this.activeImage = image;
    this.displayImage.set(true);
  }
  closeImage() {
    this.activeImage = null;
    this.displayImage.set(false);
  }

  handleDelete(image: ImageModel){
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar esta imagen?');
    if(!confirmed) return;

    if(!image.featured){
      this.images.update(imagesOfArray => imagesOfArray.filter(i => i !== image));
    } else {
      this.images.update(imagesOfArray => {
        const filtered = imagesOfArray.filter(i => i !== image);
        return filtered.map((img, index) => index === this.IMAGE_FEATURED ? {...img, featured: true } : img );
      })
    }
  }

  drop(event: CdkDragDrop<ImageModel[]>){
    this.images.update(images => {
      moveItemInArray(images, event.previousIndex, event.currentIndex);

      if(!images[0].featured){
        images = images.map((img, index) => {
          return index === this.IMAGE_FEATURED 
            ? { ...img, featured: true }
            : { ...img, featured: false }
        })
      }
      return images;
    });
  }

}
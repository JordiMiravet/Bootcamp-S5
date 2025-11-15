import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModel } from '../../models/imageModel';
import { ImageComponent } from '../image/image';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageComponent],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})

export class GalleryComponent {

  imagePath : string = "https://picsum.photos/";
  imageWidth : string = "400/600";
  imageType : string = "?grayscale&seed=";

  images = signal<ImageModel[]>([
    { id: 1, url: `${this.imagePath}${this.imageWidth}${this.imageType}1`, description: 'Imagen 1', featured: true },
    { id: 2, url: `${this.imagePath}${this.imageWidth}${this.imageType}2`, description: 'Imagen 2' },
    { id: 3, url: `${this.imagePath}${this.imageWidth}${this.imageType}3`, description: 'Imagen 3' },
    { id: 4, url: `${this.imagePath}${this.imageWidth}${this.imageType}4`, description: 'Imagen 4' },
    { id: 5, url: `${this.imagePath}${this.imageWidth}${this.imageType}5`, description: 'Imagen 5' },
    { id: 6, url: `${this.imagePath}${this.imageWidth}${this.imageType}6`, description: 'Imagen 6' },
    { id: 7, url: `${this.imagePath}${this.imageWidth}${this.imageType}7`, description: 'Imagen 7' },
    { id: 8, url: `${this.imagePath}${this.imageWidth}${this.imageType}8`, description: 'Imagen 8' },
    { id: 9, url: `${this.imagePath}${this.imageWidth}${this.imageType}9`, description: 'Imagen 9' },
    { id: 10, url: `${this.imagePath}${this.imageWidth}${this.imageType}10`, description: 'Imagen 10' },
    { id: 11, url: `${this.imagePath}${this.imageWidth}${this.imageType}11`, description: 'Imagen 11' },
    { id: 12, url: `${this.imagePath}${this.imageWidth}${this.imageType}12`, description: 'Imagen 12' },
  ]);

  displayImage = signal(false);
  activeImage: ImageModel | null = null;

  openImage(image: ImageModel) {
    this.activeImage = image;
    this.displayImage.set(true);
  }
  closeImage() {
    this.activeImage = null;
    this.displayImage.set(false);
  }

  handleDelete(image: ImageModel){
    if(!image.featured){
      this.images.update(imagesOfArray => imagesOfArray.filter(i => i !== image));
    } else {
      this.images.update(imagesOfArray => {
        const filtered = imagesOfArray.filter(i => i !== image);
        return filtered.map((img, index) => index === 0 ? {...img, featured: true } : img )
      })
    }
  }
}
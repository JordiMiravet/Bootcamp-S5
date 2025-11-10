import { Component, signal } from '@angular/core';
import { ImageModel } from '../../models/image';
import { ImageComponent } from '../image/image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageComponent],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})

export class GalleryComponent {
  images = signal<ImageModel[]>([
    { id: 1, url: 'https://picsum.photos/200/300?grayscale&seed=1', description: 'Imagen 1' },
    { id: 2, url: 'https://picsum.photos/200/300?grayscale&seed=2', description: 'Imagen 2' },
    { id: 3, url: 'https://picsum.photos/200/300?grayscale&seed=3', description: 'Imagen 3' },
    { id: 1, url: 'https://picsum.photos/200/300?grayscale&seed=4', description: 'Imagen 4' },
    { id: 2, url: 'https://picsum.photos/200/300?grayscale&seed=5', description: 'Imagen 5' },
    { id: 3, url: 'https://picsum.photos/200/300?grayscale&seed=6', description: 'Imagen 6' },
    { id: 1, url: 'https://picsum.photos/200/300?grayscale&seed=7', description: 'Imagen 7' },
    { id: 2, url: 'https://picsum.photos/200/300?grayscale&seed=8', description: 'Imagen 8' }
  ]);
}



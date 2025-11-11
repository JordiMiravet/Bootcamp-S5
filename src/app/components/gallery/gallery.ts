import { Component, signal } from '@angular/core';
import { ImageModel } from '../../models/imageModel';
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
    { id: 1, url: 'https://picsum.photos/200/300?grayscale&seed=1', description: 'Imagen 1', featured: true },
    { id: 2, url: 'https://picsum.photos/200/300?grayscale&seed=2', description: 'Imagen 2' },
    { id: 3, url: 'https://picsum.photos/200/300?grayscale&seed=3', description: 'Imagen 3' },
    { id: 4, url: 'https://picsum.photos/200/300?grayscale&seed=4', description: 'Imagen 4' },
    { id: 5, url: 'https://picsum.photos/200/300?grayscale&seed=5', description: 'Imagen 5' },
    { id: 6, url: 'https://picsum.photos/200/300?grayscale&seed=6', description: 'Imagen 6' },
    { id: 7, url: 'https://picsum.photos/200/300?grayscale&seed=7', description: 'Imagen 7' },
    { id: 8, url: 'https://picsum.photos/200/300?grayscale&seed=8', description: 'Imagen 8' },
    { id: 9, url: 'https://picsum.photos/200/300?grayscale&seed=9', description: 'Imagen 9' },
    { id: 10, url: 'https://picsum.photos/200/300?grayscale&seed=10', description: 'Imagen 10' },
    { id: 11, url: 'https://picsum.photos/200/300?grayscale&seed=11', description: 'Imagen 11' },
    { id: 12, url: 'https://picsum.photos/200/300?grayscale&seed=12', description: 'Imagen 12' },
  ]);
}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery'

@Component({
  selector: 'app-root',
  imports: [GalleryComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('image-gallery');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageComponent } from './components/image/image'

@Component({
  selector: 'app-root',
  imports: [ImageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('image-gallery');
}

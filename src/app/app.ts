import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery';

import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

@Component({
  selector: 'app-root',
  imports: [GalleryComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('image-gallery');
}
export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
};

// deberia poner el providers este dentro del decorador?
// antes he hecho un button y no me ha funcionado, todo instalado correctamente y nada
  // npm list primeng
  // npm list tailwindcss
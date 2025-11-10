import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.html',
  styleUrls: ['./image.css'],
})
export class ImageComponent {
  img : string = "https://picsum.photos/id/237/300/200";
}

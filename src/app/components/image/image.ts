import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModel } from '../../models/image';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.html',
  styleUrls: ['./image.css'],
})
export class ImageComponent {
  @Input() image!: ImageModel;
}

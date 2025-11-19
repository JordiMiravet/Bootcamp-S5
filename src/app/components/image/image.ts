import { Component, input, output, ChangeDetectionStrategy,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModel } from '../../models/imageModel';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.html',
  styleUrls: ['./image.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {

  image = input.required<ImageModel>();
  deleteImage = output<ImageModel>();

  deleteImageClick(event: Event) {
    event.stopPropagation();
    this.deleteImage.emit(this.image());
  }
}
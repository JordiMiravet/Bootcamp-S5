import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy,  } from '@angular/core';
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
  @Input() image!: ImageModel;
  @Output() deleteImage = new EventEmitter<ImageModel>();

  deleteImageClick(event: Event) {
    event.stopPropagation();
    this.deleteImage.emit(this.image);
  }
}
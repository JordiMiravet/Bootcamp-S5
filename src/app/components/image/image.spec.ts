import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageModel } from '../../models/imageModel';
import { ImageComponent } from './image';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
  });

  it("should render an image with correct src and alt", () => {
    const testImage: ImageModel = {
      id: 1,
      url: 'https://picsum.photos/200/300?grayscale&seed=1',
      description: 'Test image 1'
    };
    component.image = testImage;
    fixture.detectChanges();

    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');

    expect(img.getAttribute('src')).toBe(testImage.url);
    expect(img.getAttribute('alt')).toBe(testImage.description);
  });
});

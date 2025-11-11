import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery';

describe('Gallery', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should return the correct list of images", () => {
    const mockImages = [
      { id: 1, url: 'https://picsum.photos/200/300?grayscale&seed=1', description: 'Imagen 1', featured: true },
      { id: 2, url: 'https://picsum.photos/200/300?grayscale&seed=2', description: 'Imagen 2' },
      { id: 3, url: 'https://picsum.photos/200/300?grayscale&seed=3', description: 'Imagen 3' }
    ];
    component.images.set(mockImages); 
    fixture.detectChanges();

    const images = component.images();
    expect(images.length).toBe(mockImages.length);
    expect(images[0]).toEqual(mockImages[0]);
  });
});

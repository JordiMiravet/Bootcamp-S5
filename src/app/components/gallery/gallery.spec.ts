import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery';
import { ImageModel } from '../../models/imageModel';

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
  
  it("should display alternative text when an empty image is returned", () => {
    const mockImages = [
      { id: 1, url: '', description: 'Imagen 1'}
    ];
    component.images.set(mockImages); 
    fixture.detectChanges();

    const emptyImage = fixture.nativeElement.querySelector(".empty-image");

    expect(emptyImage).toBeTruthy();
    expect(emptyImage.textContent).toContain("Imagen no disponible");
  });
  
  it("should delete an image when confirmed", () => {

    const imagePath : string = "https://picsum.photos/";
    const imageWidth : string = "400/600";
    const imageType : string = "?grayscale&seed=";

    const mockImages: ImageModel[] = [
      { id: 1, url: `${imagePath}${imageWidth}${imageType}1`, description: 'Imagen 1', featured: true },
      { id: 2, url: `${imagePath}${imageWidth}${imageType}2`, description: 'Imagen 2' }
    ];

    component.images.set(mockImages);
    fixture.detectChanges();

    const deleteButton = fixture.nativeElement.querySelector('button');
    expect(deleteButton).toBeTruthy();
    
    const confirmSpy = spyOn(window, 'confirm').and.returnValue(true); 

    component.handleDelete(mockImages[1]);
    fixture.detectChanges();

    expect(confirmSpy).toHaveBeenCalledWith('¿Estás seguro de que deseas eliminar esta imagen?');

    let imagesAfterDelete = component.images(); 
    expect(imagesAfterDelete.length).toBe(1); 
    expect(imagesAfterDelete[0].id).toBe(1);
  });
});

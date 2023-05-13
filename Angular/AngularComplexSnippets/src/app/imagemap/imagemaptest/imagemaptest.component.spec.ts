import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemaptestComponent } from './imagemaptest.component';

describe('ImagemaptestComponent', () => {
  let component: ImagemaptestComponent;
  let fixture: ComponentFixture<ImagemaptestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagemaptestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemaptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

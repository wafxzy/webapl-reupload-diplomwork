import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthamericatoursComponent } from './southamericatours.component';

describe('SouthamericatoursComponent', () => {
  let component: SouthamericatoursComponent;
  let fixture: ComponentFixture<SouthamericatoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthamericatoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthamericatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

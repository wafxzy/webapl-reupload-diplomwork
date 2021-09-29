import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricatoursComponent } from './africatours.component';

describe('AfricatoursComponent', () => {
  let component: AfricatoursComponent;
  let fixture: ComponentFixture<AfricatoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfricatoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniatoursComponent } from './oceaniatours.component';

describe('OceaniatoursComponent', () => {
  let component: OceaniatoursComponent;
  let fixture: ComponentFixture<OceaniatoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceaniatoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceaniatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

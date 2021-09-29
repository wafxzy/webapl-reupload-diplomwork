import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthamericatoursComponent } from './northamericatours.component';

describe('NorthamericatoursComponent', () => {
  let component: NorthamericatoursComponent;
  let fixture: ComponentFixture<NorthamericatoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthamericatoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthamericatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

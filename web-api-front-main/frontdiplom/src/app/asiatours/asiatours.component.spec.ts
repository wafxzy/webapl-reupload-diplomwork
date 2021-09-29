import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiatoursComponent } from './asiatours.component';

describe('AsiatoursComponent', () => {
  let component: AsiatoursComponent;
  let fixture: ComponentFixture<AsiatoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiatoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

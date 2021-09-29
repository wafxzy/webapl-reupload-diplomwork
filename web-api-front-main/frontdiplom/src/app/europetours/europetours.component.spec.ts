import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropetoursComponent } from './europetours.component';

describe('EuropetoursComponent', () => {
  let component: EuropetoursComponent;
  let fixture: ComponentFixture<EuropetoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropetoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropetoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

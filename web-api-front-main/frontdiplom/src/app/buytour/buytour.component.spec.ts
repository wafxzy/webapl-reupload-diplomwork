import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuytourComponent } from './buytour.component';

describe('BuytourComponent', () => {
  let component: BuytourComponent;
  let fixture: ComponentFixture<BuytourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuytourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuytourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

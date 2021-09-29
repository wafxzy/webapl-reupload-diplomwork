import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToulookComponent } from './toulook.component';

describe('ToulookComponent', () => {
  let component: ToulookComponent;
  let fixture: ComponentFixture<ToulookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToulookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToulookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrentalComponent } from './carrental.component';

describe('CarrentalComponent', () => {
  let component: CarrentalComponent;
  let fixture: ComponentFixture<CarrentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrentalComponent]
    });
    fixture = TestBed.createComponent(CarrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

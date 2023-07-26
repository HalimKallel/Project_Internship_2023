import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AedcarrentalComponent } from './aedcarrental.component';

describe('AedcarrentalComponent', () => {
  let component: AedcarrentalComponent;
  let fixture: ComponentFixture<AedcarrentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AedcarrentalComponent]
    });
    fixture = TestBed.createComponent(AedcarrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AedcComponent } from './aedc.component';

describe('AedcComponent', () => {
  let component: AedcComponent;
  let fixture: ComponentFixture<AedcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AedcComponent]
    });
    fixture = TestBed.createComponent(AedcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

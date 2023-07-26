import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AedcarComponent } from './aedcar.component';

describe('AedcarComponent', () => {
  let component: AedcarComponent;
  let fixture: ComponentFixture<AedcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AedcarComponent]
    });
    fixture = TestBed.createComponent(AedcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

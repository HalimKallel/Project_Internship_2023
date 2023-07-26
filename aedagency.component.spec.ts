import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AedagencyComponent } from './aedagency.component';

describe('AedagencyComponent', () => {
  let component: AedagencyComponent;
  let fixture: ComponentFixture<AedagencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AedagencyComponent]
    });
    fixture = TestBed.createComponent(AedagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

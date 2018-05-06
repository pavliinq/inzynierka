import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDodajDefinicjeComponent } from './form-dodaj-definicje.component';

describe('FormDodajDefinicjeComponent', () => {
  let component: FormDodajDefinicjeComponent;
  let fixture: ComponentFixture<FormDodajDefinicjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDodajDefinicjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDodajDefinicjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

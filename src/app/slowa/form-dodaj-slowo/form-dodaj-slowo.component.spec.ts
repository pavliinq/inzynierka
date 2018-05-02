import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDodajSlowoComponent } from './form-dodaj-slowo.component';

describe('FormDodajSlowoComponent', () => {
  let component: FormDodajSlowoComponent;
  let fixture: ComponentFixture<FormDodajSlowoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDodajSlowoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDodajSlowoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

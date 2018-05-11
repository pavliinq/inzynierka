import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDodajKursComponent } from './form-dodaj-kurs.component';

describe('FormDodajKursComponent', () => {
  let component: FormDodajKursComponent;
  let fixture: ComponentFixture<FormDodajKursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDodajKursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDodajKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

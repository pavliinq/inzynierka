import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicjaComponent } from './definicja.component';

describe('DefinicjaComponent', () => {
  let component: DefinicjaComponent;
  let fixture: ComponentFixture<DefinicjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

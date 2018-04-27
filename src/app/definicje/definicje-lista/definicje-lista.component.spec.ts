import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicjeListaComponent } from './definicje-lista.component';

describe('DefinicjeListaComponent', () => {
  let component: DefinicjeListaComponent;
  let fixture: ComponentFixture<DefinicjeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicjeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicjeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

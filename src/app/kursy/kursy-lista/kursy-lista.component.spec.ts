import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KursyListaComponent } from './kursy-lista.component';

describe('KursyListaComponent', () => {
  let component: KursyListaComponent;
  let fixture: ComponentFixture<KursyListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursyListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KursyListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

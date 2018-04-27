import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowaListaComponent } from './slowa-lista.component';

describe('SlowaListaComponent', () => {
  let component: SlowaListaComponent;
  let fixture: ComponentFixture<SlowaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

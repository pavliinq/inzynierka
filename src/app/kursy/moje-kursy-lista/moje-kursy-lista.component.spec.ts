import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeKursyListaComponent } from './moje-kursy-lista.component';

describe('MojeKursyListaComponent', () => {
  let component: MojeKursyListaComponent;
  let fixture: ComponentFixture<MojeKursyListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojeKursyListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeKursyListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

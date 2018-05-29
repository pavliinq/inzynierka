import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowoNauczycielComponent } from './slowo-nauczyciel.component';

describe('SlowoNauczycielComponent', () => {
  let component: SlowoNauczycielComponent;
  let fixture: ComponentFixture<SlowoNauczycielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowoNauczycielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowoNauczycielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

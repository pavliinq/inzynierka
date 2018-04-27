import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowoComponent } from './slowo.component';

describe('SlowoComponent', () => {
  let component: SlowoComponent;
  let fixture: ComponentFixture<SlowoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

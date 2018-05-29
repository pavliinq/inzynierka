import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowaNauczycielaComponent } from './slowa-nauczyciela.component';

describe('SlowaNauczycielaComponent', () => {
  let component: SlowaNauczycielaComponent;
  let fixture: ComponentFixture<SlowaNauczycielaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlowaNauczycielaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowaNauczycielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

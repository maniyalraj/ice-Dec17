import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToPumpComponent } from './to-pump.component';

describe('ToPumpComponent', () => {
  let component: ToPumpComponent;
  let fixture: ComponentFixture<ToPumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToPumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

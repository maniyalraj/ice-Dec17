import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceGridComponent } from './ice-grid.component';

describe('IceGridComponent', () => {
  let component: IceGridComponent;
  let fixture: ComponentFixture<IceGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

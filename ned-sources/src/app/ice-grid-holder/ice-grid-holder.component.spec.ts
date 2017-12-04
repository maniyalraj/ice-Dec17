import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceGridHolderComponent } from './ice-grid-holder.component';

describe('IceGridHolderComponent', () => {
  let component: IceGridHolderComponent;
  let fixture: ComponentFixture<IceGridHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceGridHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceGridHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

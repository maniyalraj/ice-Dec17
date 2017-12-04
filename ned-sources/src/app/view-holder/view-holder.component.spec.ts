import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHolderComponent } from './view-holder.component';

describe('ViewHolderComponent', () => {
  let component: ViewHolderComponent;
  let fixture: ComponentFixture<ViewHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionPopupComponent } from './interaction-popup.component';

describe('InteractionPopupComponent', () => {
  let component: InteractionPopupComponent;
  let fixture: ComponentFixture<InteractionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantPopupComponent } from './participant-popup.component';

describe('ParticipantPopupComponent', () => {
  let component: ParticipantPopupComponent;
  let fixture: ComponentFixture<ParticipantPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

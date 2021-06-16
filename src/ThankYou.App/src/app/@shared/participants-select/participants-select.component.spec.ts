import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsSelectComponent } from './participants-select.component';

describe('ParticipantsSelectComponent', () => {
  let component: ParticipantsSelectComponent;
  let fixture: ComponentFixture<ParticipantsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

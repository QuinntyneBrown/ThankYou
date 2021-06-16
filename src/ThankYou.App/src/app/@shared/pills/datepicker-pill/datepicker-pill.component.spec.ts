import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerPillComponent } from './datepicker-pill.component';

describe('DatepickerPillComponent', () => {
  let component: DatepickerPillComponent;
  let fixture: ComponentFixture<DatepickerPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

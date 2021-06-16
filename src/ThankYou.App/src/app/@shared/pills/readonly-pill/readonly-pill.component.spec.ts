import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyPillComponent } from './readonly-pill.component';

describe('ReadonlyPillComponent', () => {
  let component: ReadonlyPillComponent;
  let fixture: ComponentFixture<ReadonlyPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

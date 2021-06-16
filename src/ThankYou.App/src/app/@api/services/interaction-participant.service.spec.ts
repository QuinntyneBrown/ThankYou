import { TestBed } from '@angular/core/testing';

import { InteractionParticipantService } from './interaction-participant.service';

describe('InteractionParticipantService', () => {
  let service: InteractionParticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractionParticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

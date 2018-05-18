import { TestBed, inject } from '@angular/core/testing';

import { FifaTeamService } from './fifa-team.service';

describe('FifaTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FifaTeamService]
    });
  });

  it('should be created', inject([FifaTeamService], (service: FifaTeamService) => {
    expect(service).toBeTruthy();
  }));
});

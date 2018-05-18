import { FifaTeamModule } from './fifa-team.module';

describe('FifaTeamModule', () => {
  let fifaTeamModule: FifaTeamModule;

  beforeEach(() => {
    fifaTeamModule = new FifaTeamModule();
  });

  it('should create an instance', () => {
    expect(fifaTeamModule).toBeTruthy();
  });
});

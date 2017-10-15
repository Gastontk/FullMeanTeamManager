import { TeamManagerPage } from './app.po';

describe('team-manager App', () => {
  let page: TeamManagerPage;

  beforeEach(() => {
    page = new TeamManagerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

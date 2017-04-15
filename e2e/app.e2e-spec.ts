import { GithubUsersPage } from './app.po';

describe('github-users App', () => {
  let page: GithubUsersPage;

  beforeEach(() => {
    page = new GithubUsersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

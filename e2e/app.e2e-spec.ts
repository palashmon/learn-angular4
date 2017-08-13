import { LearnAngular4Page } from './app.po';

describe('learn-angular4 App', () => {
  let page: LearnAngular4Page;

  beforeEach(() => {
    page = new LearnAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

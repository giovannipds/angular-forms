import { AngularFormsPage } from './app.po';

describe('angular-forms App', () => {
  let page: AngularFormsPage;

  beforeEach(() => {
    page = new AngularFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

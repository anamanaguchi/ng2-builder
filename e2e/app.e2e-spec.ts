import { Ng2BuilderPage } from './app.po';

describe('ng2-builder App', function() {
  let page: Ng2BuilderPage;

  beforeEach(() => {
    page = new Ng2BuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

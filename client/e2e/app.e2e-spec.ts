import { CobeltV0.0.1Page } from './app.po';

describe('cobelt-v0.0.1 App', () => {
  let page: CobeltV0.0.1Page;

  beforeEach(() => {
    page = new CobeltV0.0.1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

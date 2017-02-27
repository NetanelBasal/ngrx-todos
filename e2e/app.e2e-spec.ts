import { NgrxTodosPage } from './app.po';

describe('ngrx-todos App', function() {
  let page: NgrxTodosPage;

  beforeEach(() => {
    page = new NgrxTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

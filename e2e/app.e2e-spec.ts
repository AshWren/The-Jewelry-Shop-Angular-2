import { TheJewelryShopAngular2Page } from './app.po';

describe('the-jewelry-shop-angular2 App', () => {
  let page: TheJewelryShopAngular2Page;

  beforeEach(() => {
    page = new TheJewelryShopAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

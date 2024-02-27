import MainPage from './main_page';
export default new (class BasketPage extends MainPage {
  buttonTextRegExp = /Перейти в корзину/;
  // Кнопка "Перейти в корзину"
  getButtonToBasket() {
    return cy.get('a[class*=btn]').contains(this.buttonTextRegExp).should('be.visible').and('have.attr', 'href', '/basket');
  }

  // Кнопка "Очистить в корзину"
  getButtonClearBasket() {
    return cy.get('a[class*=btn]').contains('Очистить корзину');
  }

  // Нажатие на кнопку "Очистить в корзину"
  clickButtonClearBasket() {
    this.clickBasketButton();
    this.getButtonClearBasket().click();
  }

  // Очистка корзины
  ClearBasket() {
    this.clickButtonClearBasket();
  }

  // Открытие страницы "Корзина"
  openButtonToBasket() {
    this.getButtonToBasket().click();
  }

  // Всплывающее окно "Корзины"
  getBasketWindow() {
    return cy.get('div[class="dropdown-menu dropdown-menu-right show"]').should('be.visible');
  }

  // Отображение наименования товара в корзине
  checkProductNameInBasket(name: string) {
    cy.get('span[class="basket-item-title"]').contains(name).should('be.visible');
  }

  // Отображение цены товара в корзине
  checkProductPriceInBasket(price: number) {
    return cy.get('span[class="basket-item-price"]').contains(`- ${price} р.`).should('be.visible');
  }

  // Отображение итоговой цены в корзине
  checkAllPricesInBasket(price: number) {
    return cy
      .get('span[class="basket_price"]')

      .contains(price)
      .should('be.visible');
  }
})();

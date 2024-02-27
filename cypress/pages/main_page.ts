export default class MainPage {
  totalPricesSum: number;
  // Кнопка "Корзина"
  getBasketButton() {
    return cy.get('[id="dropdownBasket"]');
  }

  // Карточка товара на главной странице
  getProductImage() {
    return cy.get('div[class="note-item card h-100"]');
  }

  // Карточка товара со скидкой на главной странице
  getDiscountProductImage() {
    return cy.get('div[class="note-item card h-100 hasDiscount"]');
  }

  // Карточка неакционного товара на главной странице
  getNonDiscountProductImage() {
    return this.getProductImage().first().should('be.visible');
  }

  // Карточка акционного товара на главной странице
  checkDiscountProductImage() {
    return this.getDiscountProductImage().first().should('be.visible');
  }

  // Карточка товара на главной странице
  checkProductImage() {
    return cy.get('div[class*="note-item card"]').should('be.visible');
  }

  // Кнопка "Купить" в карточке товара
  getBuyButton() {
    return cy.get('button[class*="actionBuyProduct"]');
  }

  // Нажатие на кнопку "Купить"
  clickProductToBasket() {
    this.getBuyButton().click();
  }

  // Добавление без скидки товара в корзину
  addProductToBasket() {
    this.getNonDiscountProductImage().within(() => {
      this.getBuyButton().click();
    });
  }

  // Добавление нескольких товаров  в корзину
  addSeveralProductsToBasket() {
    this.checkProductImage().then((forms) => {
      for (let i = 0; i < 8; i++) {
        // Найти кнопку "Купить" внутри текущей формы
        cy.wrap(forms[i]).within(() => {
          this.clickProductToBasket();
        });
      }
    });
  }

  // Добавление товара со скидкой в корзину
  addDiscountProductToBasket() {
    this.checkDiscountProductImage().within(() => {
      this.getBuyButton().click();
    });
  }

  // Отображение кнопки "Корзина"
  checkBasketButton() {
    this.getBasketButton().should('be.visible').contains('Корзина');
  }

  // Отображение иконки "Корзины" c количеством товаров
  checkBasketWithCountProducts(pruductCount: string) {
    this.getBasketButton().next('span').should('be.visible').contains(pruductCount);
  }

  // Переключение страницы пагинации товаров"
  openPaginationPage(number: string) {
    return cy.get('li[class="page-item "]').contains(number).click();
  }

  //Получение данных страницы
  getPageInfo() {
    cy.intercept('POST', '**/product/get').as('getPage');
  }
  //Ожидание загрузки страницы
  waitForPageLoaded() {
    cy.wait('@getPage').wait(1000);
  }

  // Клик по иконке корзина
  clickBasketButton() {
    this.getBasketButton().find('i').click();
  }
}

class MainPage {
 totalPricesSum: number;
 // Кнопка "Корзина"
 getBasketButton() {
  return cy.get('[id="dropdownBasket"]');
 }

 // Карточка товара на главной странице
 getProductImage() {
  return cy.get(
   'div[class="note-item card h-100"]'
  );
 }

 // Карточка товара со скидкой на главной странице
 getDiscountProductImage() {
  return cy.get(
   'div[class="note-item card h-100 hasDiscount"]'
  );
 }

 // Карточка неакционного товара на главной странице
 getNonDiscountProductImage() {
  return this.getProductImage()
   .first()
   .should('be.visible');
 }

 // Карточка акционного товара на главной странице
 checkDiscountProductImage() {
  return this.getDiscountProductImage()
   .first()
   .should('be.visible');
 }

 // Карточка товара на главной странице
 checkProductImage() {
  return cy
   .get('div[class*="note-item card"]')
   .should('be.visible');
 }

 // Кнопка "Купить" в карточке товара
 getBuyButton() {
  return cy.get(
   'button[class*="actionBuyProduct"]'
  );
 }

 // Нажатие на кнопку "Купить"
 clickProductToBasket() {
  this.getBuyButton().click();
 }

 // Добавление без скидки товара в корзину
 addProductToBasket() {
  this.getNonDiscountProductImage().within(
   () => {
    this.getBuyButton().click();
   }
  );
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
  this.checkDiscountProductImage().within(
   () => {
    this.getBuyButton().click();
   }
  );
 }

 // Отображение кнопки "Корзина"
 checkBasketButton() {
  this.getBasketButton()
   .should('be.visible')
   .contains('Корзина');
 }

 // Отображение иконки "Корзины" c количеством товаров
 checkBasketWithCountProducts(
  pruductCount: string
 ) {
  this.getBasketButton()
   .next('span')
   .should('be.visible')
   .contains(pruductCount);
 }

 // Кнопка "Перейти в корзину"
 getButtonToBasket() {
  return cy
   .get('a[class*=btn]')
   .contains('Перейти в корзину')
   .should('be.visible')
   .and('have.attr', 'href', '/basket');
 }

 // Кнопка "Очистить в корзину"
 getButtonClearBasket() {
  return cy
   .get('a[class*=btn]')
   .contains('Очистить корзину');
 }

 // Нажатие на кнопку "Очистить в корзину"
 clickButtonClearBasket() {
  this.clickBasketButton();
  this.getButtonClearBasket().click();
 }

 // Нажатие на кнопку "Очистить в корзину"
 openPaginationPage(number: string) {
  return cy
   .get('li[class="page-item "]')
   .contains(number)
   .click();
 }

 //Получение данных страницы
 getPageInfo() {
  cy
   .intercept(
    'POST',
    'https://enotes.pointschool.ru/product/get'
   )
   .as('getPage');
 }
 //Ожидание загрузки страницы
 waitForPageLoaded() {
  cy.wait('@getPage').wait(10000);
 }

 // Очистка корзины
 ClearBasket() {
  this.clickButtonClearBasket();
 }

 // Открытие страницы "Корзина"
 openButtonToBasket() {
  this.getButtonToBasket().click();
 }

 // Клик по иконке корзина
 clickBasketButton() {
  this.getBasketButton().find('i').click();
 }

 // Всплывающее окно "Корзины"
 getBasketWindow() {
  return cy
   .get(
    'div[class="dropdown-menu dropdown-menu-right show"]'
   )
   .should('be.visible');
 }

 // Отображение наименования товара в корзине
 checkProductNameInBasket(name: string) {
  cy
   .get('span[class="basket-item-title"]')
   .contains(name)
   .should('be.visible');
 }

 // Отображение цены товара в корзине
 checkProductPriceInBasket(price: number) {
  return cy
   .get('span[class="basket-item-price"]')
   .contains(`- ${price} р.`)
   .should('be.visible');
 }
 //Получение данных корзины
 //  getBasketInfo() {
 //   cy
 //    .intercept(
 //     'POST',
 //     'https://enotes.pointschool.ru/basket/get'
 //    )
 //    .as('getBasket');
 //   cy
 //    .wait('@getBasket')
 //    .then((interception) => {
 //     // Извлекаем тело ответа
 //     const responseBody =
 //      interception.response.body;

 //     // Извлекаем массив товаров из корзины
 //     const basketItems = responseBody.basket;

 //     // Извлекаем значение basketPrice из ответа
 //     const basketPrice =
 //      responseBody.basketPrice;

 //     this.totalPricesSum = basketItems.reduce(
 //      (acc, item) => acc + item.price,
 //      0
 //     );
 //    });
 //  }

 // Отображение итоговой цены в корзине
 checkAllPricesInBasket(price: number) {
  return cy
   .get('span[class="basket_price"]')

   .contains(price)
   .should('be.visible');
 }
}

export const mainPage = new MainPage();

import { homePage } from '../../pages/home_page';
import { mainPage } from '../../pages/main_page';

describe('Test Exercise', function () {
  beforeEach(() => {
    cy.allure().description('Тест-кейс 5: Переход в корзину с 9 акционными товарами одного наименования.');
    cy.allure().step(`Открытие домашней страницы и выполнение авторизации`, true);
    console.info(`Открытие домашней страницы и выполнение авторизации`);
    cy.clearCookies();
    cy.clearLocalStorage();
    homePage.visitHomePage();
    homePage.clientAuth();
    mainPage.clickButtonClearBasket();
    mainPage.checkBasketWithCountProducts('0');
    console.info(`Корзина пуста`);
  });
  afterEach(() => {});

  it('Тест-кейс 5: Переход в корзину с 9 акционными товарами одного наименования.', function () {
    cy.allure().step(`Добавить в корзину 9 товаров одного наименования со скидкой`, true);
    console.info(`Добавить в корзину 9 товаров одного наименования со скидкой`);
    for (let i = 0; i < 9; i++) {
      mainPage.addDiscountProductToBasket();
    }
    mainPage.checkBasketWithCountProducts('9');

    cy.allure().step(`Открытие корзины с товаром`, true);
    console.info(`Открытие корзины с товаром`);
    mainPage.clickBasketButton();

    cy.allure().step(`Переход на страницу корзины`, true);
    console.info(`Переход на страницу корзины`);
    mainPage.openButtonToBasket();
  });
});

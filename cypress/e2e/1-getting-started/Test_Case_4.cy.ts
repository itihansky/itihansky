import { homePage } from '../../pages/home_page';
import { mainPage } from '../../pages/main_page';

describe('Test Exercise', function () {
  beforeEach(() => {
    cy.allure().description('Тест-кейс 4: Переход в корзину с 9 разными товарами.');
    cy.allure().step(`Открытие домашней страницы и выполнение авторизации`, true);
    console.info(`Открытие домашней страницы и выполнение авторизации`);
    homePage.visitHomePage();
    mainPage.getPageInfo();
    homePage.clientAuth();
    mainPage.clickButtonClearBasket();
    mainPage.openPaginationPage('2');
    mainPage.waitForPageLoaded();
    mainPage.addProductToBasket();
    mainPage.checkBasketWithCountProducts('1');
    console.info(`Добавить в корзину 1 товар`);
  });
  afterEach(() => {});

  it('Тест-кейс 4: Переход в корзину с 9 разными товарами.', function () {
    cy.allure().step(`Добавить в корзину ещё 8 разных товаров`, true);
    console.info(`Добавить в корзину ещё 8 разных товаров`);
    mainPage.openPaginationPage('1');
    mainPage.waitForPageLoaded();
    mainPage.addSeveralProductsToBasket();
    mainPage.checkBasketWithCountProducts('9');

    cy.allure().step(`Открытие корзины с товаром`, true);
    console.info(`Открытие корзины с товаром`);
    mainPage.clickBasketButton();

    cy.allure().step(`Переход на страницу корзины`, true);
    console.info(`Переход на страницу корзины`);
    mainPage.openButtonToBasket();
  });
});

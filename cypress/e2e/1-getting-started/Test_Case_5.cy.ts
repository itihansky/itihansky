import { homePage } from '../../pages/home_page';
import mainPage from '../../pages/basket_page';
import BasketData from '../../fixtures/mocks/mock_basket_value';
import { mock_basket_values } from '../../fixtures/mocks/routes';

describe('Test Exercise', function () {
  beforeEach(() => {
    cy.allure().description('Тест-кейс 5: Переход в корзину с 9 акционными товарами одного наименования.');
    cy.allure().step(`Открытие домашней страницы и выполнение авторизации`, true);
    console.info(`Открытие домашней страницы и выполнение авторизации`);
    homePage.visitHomePage();
    homePage.clientAuth();

    cy.allure().step(`Активация mocks для страницы с 9 разными товарами в  корзине`, true);
    console.info(`Активация mocks для страницы с 9 разными товарами в  корзине`);
    getMocks();
  });
  afterEach(() => {});

  it('Тест-кейс 5: Переход в корзину с 9 акционными товарами одного наименования.', function () {
    cy.allure().step(`Добавить в корзину 9 товаров одного наименования со скидкой`, true);
    console.info(`Добавить в корзину 9 товаров одного наименования со скидкой`);
    mainPage.checkBasketWithCountProducts('9');

    cy.allure().step(`Открытие корзины с товаром`, true);
    console.info(`Открытие корзины с товаром`);
    mainPage.clickBasketButton();

    cy.allure().step(`Переход на страницу корзины`, true);
    console.info(`Переход на страницу корзины`);
    mainPage.openButtonToBasket();
  });

  function getMocks() {
    let data = BasketData.mockData();

    mock_basket_values(data).as('basket');
  }
});

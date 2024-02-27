import { homePage } from '../../pages/home_page';
import mainPage from '../../pages/basket_page';
import TestData from '../../fixtures/Test_Case_1/testData';
import BasketData from '../../fixtures/mocks/mock_basket_value';
import { mock_basket_values } from '../../fixtures/mocks/routes';

describe('Test Exercise', function () {
  beforeEach(() => {
    cy.allure().description('Тест-кейс 1: Переход в пустую корзину.');
    cy.allure().step(`Открытие домашней страницы и выполнение авторизации`, true);
    console.info(`Открытие домашней страницы и выполнение авторизации`);
    homePage.visitHomePage();
    homePage.clientAuth();

    cy.allure().step(`Активация mocks для страницы с пустой корзиной`, true);
    console.info(`Активация mocks для страницы с пустой корзиной`);
    getMocks();
  });
  afterEach(() => {});

  it('Тест-кейс 1: Переход в пустую корзину.', function () {
    cy.allure().step(`Отображение всплывающего окна по клику по иконке "Корзина"`, true);
    console.info(`Отображение всплывающего окна по клику по иконке "Корзина"`);
    mainPage.clickBasketButton();
    mainPage.getBasketWindow();

    cy.allure().step(`Переход на страницу "Корзина"`, true);
    console.info(`Переход на страницу "Корзина"`);
    mainPage.openButtonToBasket();
  });

  function getMocks() {
    let data = BasketData.mockData();
    data = TestData.emptyBasket;

    mock_basket_values(data).as('basket');
  }
});

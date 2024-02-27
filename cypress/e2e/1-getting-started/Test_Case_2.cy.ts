import { homePage } from '../../pages/home_page';
import mainPage from '../../pages/basket_page';
import TestData from '../../fixtures/Test_Case_2/testData';
import BasketData from '../../fixtures/mocks/mock_basket_value';
import { mock_basket_values } from '../../fixtures/mocks/routes';

describe('Test Exercise', function () {
  beforeEach(() => {
    cy.allure().description('Тест-кейс 2: Переход в корзину с 1 неакционным товаром.');
    cy.allure().step(`Открытие домашней страницы и выполнение авторизации`, true);
    console.info(`Открытие домашней страницы и выполнение авторизации`);
    homePage.visitHomePage();
    homePage.clientAuth();

    cy.allure().step(`Активация mocks для страницы с 1 неакционным товаром в  корзине`, true);
    console.info(`Активация mocks для страницы с 1 неакционным товаром в  корзине`);
    getMocks();
  });
  afterEach(() => {});

  it('Тест-кейс 2: Переход в корзину с 1 неакционным товаром.', function () {
    cy.allure().step(`Добавить в корзину один товар без скидки`, true);
    console.info(`Добавить в корзину один товар без скидки`);
    mainPage.addProductToBasket();
    mainPage.checkBasketWithCountProducts('1');

    cy.allure().step(`Открытие корзины с товаром`, true);
    console.info(`Открытие корзины с товаром`);
    mainPage.clickBasketButton();
    mainPage.checkProductNameInBasket(TestData.emptyBasket.basket[0].name);
    mainPage.checkProductPriceInBasket(TestData.emptyBasket.basket[0].price);
    mainPage.checkAllPricesInBasket(TestData.emptyBasket.basketPrice);

    cy.allure().step(`Переход на страницу корзины`, true);
    console.info(`Переход на страницу корзины`);
    mainPage.openButtonToBasket();
  });

  function getMocks() {
    let data = BasketData.mockData();
    data = TestData.emptyBasket;

    mock_basket_values(data).as('basket');
  }
});

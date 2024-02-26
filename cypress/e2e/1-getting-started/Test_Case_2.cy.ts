import { homePage } from '../../pages/home_page';
import { mainPage } from '../../pages/main_page';
// import { authorizationAndOpeningPortal } from '../../../support';
// import avitoPage from '../../../pages/tracking/Avito.page';
// import homePage from '../../../pages/tracking/home.page';

describe('User eXperience', function () {
 beforeEach(() => {
  console.info(
   `Открытие домашней страницы и выполнение авторизации`
  );
  cy.clearCookies();
  cy.clearLocalStorage();
  homePage.visitHomePage();
  homePage.clientAuth();
  mainPage.clickButtonClearBasket();
  mainPage.checkBasketWithCountProducts('0');
  console.info(`Корзина пуста`);
 });
 afterEach(() => {});

 it('Тест-кейс 2: Переход в корзину с 1 неакционным товаром.', function () {
  console.info(
   `Добавить в корзину один товар без скидки`
  );
  mainPage.addProductToBasket();
  mainPage.checkBasketWithCountProducts('1');

  console.info(`Открытие корзины с товаром`);
  mainPage.clickBasketButton();
  mainPage.checkProductNameInBasket(
   'Блокнот в точку'
  );
  mainPage.checkProductPriceInBasket(400);
  mainPage.checkAllPricesInBasket(400);

  console.info(
   `Переход на страницу корзины`
  );
  mainPage.openButtonToBasket();
 });
});

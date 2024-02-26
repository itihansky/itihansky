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

 it('Тест-кейс 5: Переход в корзину с 9 акционными товарами одного наименования.', function () {
  console.info(
   `Добавить в корзину 9 товаров одного наименования со скидкой`
  );
  for (let i = 0; i < 9; i++) {
   mainPage.addDiscountProductToBasket();
  }
  mainPage.checkBasketWithCountProducts('9');

  console.info(`Открытие корзины с товаром`);
  mainPage.clickBasketButton();

  console.info(
   `Переход на страницу корзины`
  );
  mainPage.openButtonToBasket();
 });
});

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
  mainPage.getPageInfo();
  homePage.clientAuth();
  mainPage.clickButtonClearBasket();
  mainPage.openPaginationPage('2');
  mainPage.waitForPageLoaded();
  mainPage.addProductToBasket();
  mainPage.checkBasketWithCountProducts('1');
 });
 afterEach(() => {});

 it('Тест-кейс 4: Переход в корзину с 9 разными товарами.', function () {
  console.info(
   `Добавить в корзину ещё 8 разных товаров`
  );
  mainPage.openPaginationPage('1');
  mainPage.waitForPageLoaded();
  mainPage.addSeveralProductsToBasket();
  mainPage.checkBasketWithCountProducts('9');

  console.info(`Открытие корзины с товаром`);
  mainPage.clickBasketButton();

  console.info(
   `Переход на страницу корзины`
  );
  mainPage.openButtonToBasket();
 });
});

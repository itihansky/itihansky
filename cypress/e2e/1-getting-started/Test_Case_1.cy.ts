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
 afterEach(() => {
  mainPage.clickButtonClearBasket();
 });

 it('Тест-кейс 1: Переход в пустую корзину.', function () {
  console.info(
   `Отображение всплывающего окна по клику по иконке "Корзина"`
  );
  mainPage.clickBasketButton();
  mainPage.getBasketWindow();

  console.info(
   `Переход на страницу "Корзина"`
  );
  mainPage.openButtonToBasket();
 });
});

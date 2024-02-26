// import userCredentials from '../fixtures/users';
// import orderPage from '../../pages/clients/orders/order/order.info.page';

class HomePage {
 // Отркытие домашней страницы
 visitHomePage() {
  cy.visit(
   'https://enotes.pointschool.ru/login'
  );
 }
 userLogin = 'test';
 userPasswird = 'test';

 // Поле ввода имени
 getImputNameField() {
  return cy.get('[id="loginform-username"]');
 }

 // Поле ввода пароля
 getImputPasswordField() {
  return cy.get('[id="loginform-password"]');
 }

 // Кнопка "Вход"
 getEnterButton() {
  return cy.get('[name="login-button"]');
 }

 clientAuth() {
  this.getImputNameField()
   .click()
   .type(this.userLogin);
  this.getImputPasswordField()
   .click()
   .type(this.userPasswird);
  this.getEnterButton().click();
 }
}

export const homePage = new HomePage();

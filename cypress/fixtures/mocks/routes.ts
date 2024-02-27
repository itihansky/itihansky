import basketValue from './mock_basket_value';

let mainUrl = 'https://enotes.pointschool.ru';

function mock_basket_values(json: any = basketValue.getMockData()) {
  return cy.intercept('POST', `${mainUrl}/basket/get`, (req) => {
    req.reply((res) => {
      res.send({ body: json, statusCode: 200 });
    });
  });
}

export { mock_basket_values };

export default new (class MockBasket {
  mockData() {
    return {
      response: true,
      basket: [
        {
          id: 10,
          name: 'Плюшевый кот',
          price: 900,
          count: 1,
          poster: '/img/products/plyushevyj-kot.jpg',
          discount: 0,
        },
        {
          id: 1,
          name: 'Творческий беспорядок',
          price: 400,
          count: 1,
          poster: '/img/products/tvorcheskij-besporyadok.jpg',
          discount: 300,
        },
        {
          id: 2,
          name: 'Блокнот в точку',
          price: 400,
          count: 1,
          poster: '/img/products/bloknot-v-tochku.jpg',
          discount: 0,
        },
        {
          id: 3,
          name: 'Игра престолов',
          price: 285,
          count: 1,
          poster: '/img/products/igra-prestolov.jpg',
          discount: 100,
        },
        {
          id: 4,
          name: 'Кошечка Мари',
          price: 442,
          count: 1,
          poster: '/img/products/koshechka-mari.jpg',
          discount: 0,
        },
        {
          id: 5,
          name: 'Нотная тетрадь',
          price: 499,
          count: 1,
          poster: '/img/products/notnaya-tetrad.jpg',
          discount: 0,
        },
        {
          id: 6,
          name: 'Black&Red',
          price: 315,
          count: 1,
          poster: '/img/products/no_image.png',
          discount: 50,
        },
        {
          id: 7,
          name: 'Гусь. Дедлайн',
          price: 750,
          count: 1,
          poster: '/img/products/gus-dedlajn.jpg',
          discount: 0,
        },
        {
          id: 8,
          name: 'Художник',
          price: 420,
          count: 1,
          poster: '/img/products/hudozhnik.jpg',
          discount: 0,
        },
      ],
      basketCount: 9,
      basketPrice: 4411,
    };
  }

  getMockData(data: any = this.mockData()) {
    return JSON.stringify(data);
  }
})();

class Car {
  // Необязательное объявление публичных свойств
  brand;
  model;
  price;

  // Аналог функции-конструктора
  constructor({  brand, model, price }) {
    // Инициализация объявленных свойств
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
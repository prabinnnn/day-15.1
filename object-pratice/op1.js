let property = {
  address: "baneshwor",
  price: 100000,
  discount: 10,
  discount1: 7,
  mydis: function () {
    if (this.price > 100) {
      return this.discount + this.price;
    }
    return this.discount1 + this.price;
  },
};

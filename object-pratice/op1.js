let property = {
  address: "baneshwor",
  price: 100000,
  discount: 10,
  mydis: function () {
    if (this.price > 100) {
      return this.discount;
    }
    return;
  },
};

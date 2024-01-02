let property = {
  address: "baneshwor",
  price: 100000,
  discount: "10%",
  discount1: "7%",
  mydis: function () {
    if (this.price > 100) {
      return this.add(discount + price);
    }
    return this.add(discount1 + price);
  },
};

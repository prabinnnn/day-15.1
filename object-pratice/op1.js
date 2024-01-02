let property = {
  address: "baneshwor",
  price: 100000,
  discount: "10%",
  discount1: "7%",
  mydis: function () {
    if (this.price > 100) {
      let discountedPrice =
        this.price - (parseFloat(this.discount) / 100) * this.price;
      return discountedPrice;
    }
    let discountedPrice1 =
      this.price - (parseFloat(this.discount1) / 100) * this.price;
    return discountedPrice1;
  },
};

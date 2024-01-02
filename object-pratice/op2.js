let prod = {
  name: "headphones",
  oringalprice: 100,
  newprice: 93,
  discount: "7%",

  checkthepp: function () {
    if (oringalprice < newprice) {
      console.log("this already discount by 7%");
    }
    return this.name + this.oringalprice + this.discount;
  },
};

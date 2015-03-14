
function HipsterList(cBack) {
//menu items
 this.shopInfo =
      {
        "shopName": "The Coffee Connection",
        "address": "123 Lakeside Way",
        "phone": "16503600708",
        "prices": 
          {
            "Cafe Latte": 4.75,
            "Flat White": 4.75,
            "Cappucino": 3.85,
            "Single Espresso": 2.05,
            "Double Espresso": 3.75,
            "Americano": 3.75,
            "Cortado": 4.55,
            "Tea": 3.65,
            "Choc Mudcake": 6.40,
            "Choc Mousse": 8.20,
            "Affogato": 14.80,
            "Tiramisu": 11.40,
            "Blueberry Muffin": 4.05,
            "Chocolate Chip Muffin": 4.05,
            "Muffin Of The Day": 4.55
          }
      };
    this.list = []
    this.price = []
    this.total = []

    var cBack = (cBack || function() {})();

}

//functions for list
  HipsterList.prototype.add = function(item, quantity) {
     this.list.push(item);
     var price = (this.shopInfo.prices[item] * quantity).toFixed(2)
     this.price.push(price)
    };

  HipsterList.prototype.getAll = function() {
    return this.list;
  };

  HipsterList.prototype.getTotal = function() {
    this.total = eval(this.price.join('+')).toFixed(2)
    return this.total
  };
  


module.exports = HipsterList;


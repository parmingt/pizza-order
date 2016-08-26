function Pizza(size){
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

Pizza.prototype.getPrice = function(){
  var price;
  switch (this.size) {
    case "Small":
      price = 8;
      break;
    case "Medium":
      price = 10;
      break;
    case "Large":
      price = 12;
      break;
    default:
      price = 10;
  }

  this.toppings.forEach(function(topping){
    price++;
  })

  return price;
}

$(document).ready(function(){
  $("#order-button").click(function(){
    var size = $("#size").val();
    var newPizza = new Pizza(size);

    $(".topping").each(function(){
      if($(this).is(":checked")){
        var newTopping = $(this).val();
        newPizza.addTopping(newTopping);
      }
    })

    var price = newPizza.getPrice();
    $("#price-display").text("Your total will be $" + price + ".");
  })
})

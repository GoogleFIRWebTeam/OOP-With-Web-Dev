/************************
These are object constructors:
constructors are used to make it easier to automat objects on the go
************************/
function DonutConstructor(category, name, description, price, imgUrl, inStock) {
    this.category = category;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
}

function receiptConstructor(donutSold, cashReceived) {
    this.date = new Date();
    this.changeToReceive = cashReceived - donutSold.price;
    this.donut = donutSold;
    //Encapsulation Example
    this.receipt = function() {return this.donut.name + " $" + this.changeToReceive};
    //the next few lines does the
    for (i in DonutsInStock){
      if(DonutsInStock[i].donut == donutSold){
        DonutsInStock[i].instock -= 1
      };
    };
    //console.log(DonutsInStock);
}

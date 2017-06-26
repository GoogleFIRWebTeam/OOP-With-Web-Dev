var glazedPhoto="DonutPics/glazed.png"
var chocPhoto="DonutPics/chocolate.png"
var sprinklePhoto="DonutPics/sprinkled.png"
var lemonPhoto="DonutPics/lemon.png"
var strawberryPhoto="DonutPics/strawberry.png"
var creamPhoto="DonutPics/cream.png"

/************************
This is a donut object
************************/
var donutObject = {
  category:"category",
  name:"name",
  description:"some description",
  price: 0.01
};


/************************
THe following lines:
1. Create the different types of donuts sold at the store using the DonutConstructor
2. Creates an array that keeps count of donuts in stock
************************/
var RegularGlazed = new  DonutConstructor("Regular" , "Original Glazed", "The classic Donut", 2.50, glazedPhoto);
var ChocolateCovered = new  DonutConstructor("Regular" , "Chocolate Covered", "Chocolate covered donut for the chocolate lovers", 3.50,chocPhoto);
var SprinkledGlazed = new  DonutConstructor("Regular" , "Sprinkles", "The Original Glazed with sprinkles", 3.50, sprinklePhoto);
var StrawberryFilled = new  DonutConstructor("Filled" , "Strawberry", "Strawberry filled donut", 3.75, strawberryPhoto);
var CreamFilled = new  DonutConstructor("Filled" , "Cream", "Cream filled donut", 3.75, creamPhoto);
var LemonFilled = new  DonutConstructor("Filled" , "Lemon", "Lemon jelly filled", 3.75, lemonPhoto);

var DonutsInStock =
[
  {donut: RegularGlazed,instock: 5},
  {donut: ChocolateCovered,instock: 5},
  {donut: SprinkledGlazed,instock: 5},
  {donut: StrawberryFilled,instock: 5},
  {donut: CreamFilled,instock: 5},
  {donut: LemonFilled,instock: 5}
]

/**
The following lines display different results

//alert (yourTransaction.receipt);
//alert (yourTransaction.receipt());

//var yourDonuts = [RegularGlazed]
var yourDonut = RegularGlazed
var yourTransaction = new receiptConstructor(yourDonut, 10.00);
var yourReceipt = yourTransaction.receipt();

document.getElementById("receipt").innerHTML =
"Your receipt: " + yourReceipt;
**/


document.getElementById("cartDiv").style.display = "none";
document.getElementById("description").style.display = "none";

var bank = document.getElementById('bankAmount');
var AmountInBank = parseFloat(bank.innerHTML)
var totalBank = document.getElementById('bankAmount');
var purchaseTotal = parseFloat(totalAmount.innerHTML)
/**
The variables are used inside the showDonut function
**/
var chosenDonutPic = document.getElementById('donutIMG');
var chosenDonutName= document.getElementById('donutName');
var chosenDonutInfo = document.getElementById('donutInfo');
var chosenDonutPrice = document.getElementById('donutPrice');
var chosenDonutStock = document.getElementById('donutinStock');
var imgURL, price, donutname, desc;

var cartTable =  document.getElementById("cart");
var shoppingCartCode ;

console.log( "Starting Bank Amount: " + AmountInBank);
console.log( "Starting Order Total : " + purchaseTotal);

function addMoney(){
  moneyToAdd = parseFloat(document.getElementById('money').value);
  if(!moneyToAdd ){
    alert('Please enter a number amount.');
  }
  else{
    newBank = AmountInBank + moneyToAdd;
    AmountInBank = newBank;
    console.log("addMoney() function money to be added is " + moneyToAdd + " and the new bank total is "+ newBank);
    bank.innerHTML = newBank.toFixed(2);
    document.getElementById('money').value="";
    //alert(AmountInBank)
  }
}

//this function will execute the the sell
function executeSell(){
  if(!AmountInBank || (parseFloat(AmountInBank) < parseFloat(purchaseTotal)))
  {
    alert('You dont have enough money.')
  }
  else
    {
      AmountInBank = (parseFloat(AmountInBank) - parseFloat(purchaseTotal)).toFixed(2)
      console.log(AmountInBank);
      bank.innerHTML = AmountInBank;
      getReceipt();
      clearCart();
      purchaseTotal = 0;
      totalAmount.innerHTML = (purchaseTotal).toFixed(2)
    }
}

//This For Each Function populates the inventory
DonutsInStock.forEach(function (donuts, index){
  var regularDonutCount = 0;
  var filledDonutCount = 0;

  //Assigns the donut objects to appropriate variable name
  var donut = donuts.donut.name;
  var price = donuts.donut.price;
  var cat = donuts.donut.category;
  var img = donuts.donut.imgUrl;
  var desc = donuts.donut.description;
  var instock = donuts.instock;

  //Create variable to control the DOM of the html table for the sidemenus
  var donutsWithHolesTable =  document.getElementById("donutsWithHoles")
  var donutsWithFillingTable =  document.getElementById("donutsWithFilling")
  console.log(cat + " -> " + donut + " : $" + price.toFixed(2)+ " image URL: "+img);

  //populate sidemenu
  if(cat == "Regular"){
    donutsWithHoleinfoRow = donutsWithHolesTable.insertRow(regularDonutCount);
    donutsWithHoleinfoCell = donutsWithHoleinfoRow.insertCell(regularDonutCount);
    donutsWithHoleinfoCell.innerHTML = "<img class='menuIMG' src='"+img+"' name='"+ donut +"' price='"+price +"' info='"+desc+"' instock='"+instock+"'><br><p id='menuItemName'>" + donut + "<br>"+ instock + "</p>";
    regularDonutCount+=1;
  }
  else if(cat == "Filled"){
    donutsWithFillinginfoRow = donutsWithFillingTable.insertRow(filledDonutCount);
    donutsWithFillinginfoCell = donutsWithFillinginfoRow.insertCell(filledDonutCount);
    donutsWithFillinginfoCell.innerHTML = "<img class='menuIMG' src='"+img+"' name='"+ donut +"' price='"+price +"' info='"+desc+"' instock=' "+instock+"'><br><p id='menuItemName'>" + donut + "<br>"+ instock + "</p>";
    filledDonutCount+=1;
  }

});


/**
This function is assigned to the variable "showDonut" and it is called
every time a Donut is selected on a sidemenu via the click listener below it  from the sidemenu
**/
var showDonut = function() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("description").style.display = "block";
  imgURL = this.getAttribute("src");
  donutname = this.getAttribute("name");
  price = parseFloat(this.getAttribute("price")).toFixed(2);
  desc = this.getAttribute("info");
  instock = parseFloat(this.getAttribute("instock"));
  chosenDonutPrice.innerHTML = price;
  chosenDonutName.innerHTML = donutname;
  chosenDonutInfo.innerHTML = desc;
  chosenDonutStock.innerHTML = instock;
  chosenDonutPic.src = imgURL;
};
/**
This for loop adds a click type event listener to any element with the class "menuIMG"
**/
donutPics = document.getElementsByClassName('menuIMG'); //creates an array of the different elements that have the class name menu
for (var i = 0; i < donutPics.length; i++) {
    donutPics[i].addEventListener('click', showDonut, false);
}

/**
The function below registers everytime the user presses the buttomn to add a donut to their list
below are some global variables used by plusOne()
**/
var numberOfDonuts = 0;
var tempDonut="";
var DonutsInCart=[];

function plusOne(){
  var plusOneDonutName, plusOneDonutPrice;
  document.getElementById("receiptDiv").style.display = "none";

  document.getElementById("cartDiv").style.display = "block";


//if cart has donut in it with this name
  if(containsDonut(donutname, DonutsInCart)){
    console.log("Donut already in cart: " +containsDonut(donutname, DonutsInCart));
    for (i = 0; i < DonutsInCart.length; i++) {
        if (DonutsInCart[i].name == donutname) {
          DonutsInCart[i].quantity += 1;
          purchaseTotal += parseFloat(DonutsInCart[i].price)
          //console.log(cart);
            //return true;
        }
    }
    console.log(DonutsInCart);
    updateCart(DonutsInCart);
  }
  else if(!containsDonut(donutname, DonutsInCart) || DonutsInCart.length == 0  ) {
    console.log("Donut already in cart: " +containsDonut(donutname, DonutsInCart));
    donutObject = {name: donutname, quantity:1, price: price};
    console.log(donutObject);
    DonutsInCart.push(donutObject)
    console.log(DonutsInCart);
    price = parseFloat(price)
    purchaseTotal += price
    updateCart(DonutsInCart);
    //console.log(DonutsInCart[index].name + " :pushing object: " + plusOneDonutName +" index: "+ index +": tempdonut is :" + tempDonut);
  }

}

function updateCart(cart){
  var  row = 0;
  shoppingCartCode = "";
  console.log(cart);
  var price;
  cart.forEach(function (donut, index){
    price = parseFloat(donut.quantity * donut.price).toFixed(2);
    shoppingCartCode += "<p id=''>"+donut.quantity+" : "+donut.name+" : $" + price+"</p>";
    //console.log(donut);
  });
  cartTable.innerHTML = shoppingCartCode;
  console.log(shoppingCartCode +"::"+ purchaseTotal);
  totalAmount.innerHTML = purchaseTotal.toFixed(2);
}

function clearCart(){
  DonutsInCart = [];
  shoppingCartCode = "";
  //updateCart(DonutsInCart);
  cartTable.innerHTML = "Empty Cart";
}

function getReceipt(){
  console.log(shoppingCartCode);
  document.getElementById("cartDiv").style.display = "none";

  document.getElementById("receiptDiv").style.display = "block";

}

//Function for checking if the shopping cart has the current donut
function containsDonut(donut, cart) {
    var i;
    for (i = 0; i < cart.length; i++) {
        if (cart[i].name == donut) {
          //console.log(cart);
            return true;
        }
    }
    return false;
}

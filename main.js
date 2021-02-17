var emptyVariable = "";
let mycoffeeorderDetails = {
  customerName: {
    firstName: "Samrath",
    lastName: "Singh Saini",
  },
  coffeeSize: ["Small", "Medium", "Large", "Gigantic"],
  typeofCoffee: [
    "Brewed Coffee",
    "Brewed Coffee - Dark Roast",
    "Latte",
    "Cappuccino",
    "Espresso",
    "Hot Chocolate",
  ],
  dairyChoice: [
    "Black",
    "2% Milk",
    "Fat Free",
    "Cream",
    "Almond Milk",
    "Chocolate Milk",
  ],
  flavourShotChoice: ["Chocolate", "Vanilla", "Caramel", "Hazelnut"],

  chocolateDrizzleBool: true,
  whippedCreamBool: true,
  coffeeSweetenerBool: false,
  coldFoamBool: false,

  orderSummary: function () {
    function sweetener() {
      if (mycoffeeorderDetails.coffeeSweetenerBool === true) {
        s = "\nSweetener : Yes \n";
        return s;
      } else {
        return emptyVariable;
      }
    }
    //////////
    function whippedCream() {
      if (mycoffeeorderDetails.whippedCreamBool === true) {
        wc = "\nWhipped Cream : Yes \n";
        return wc;
      } else {
        return emptyVariable;
      }
    }
    /////////

    function coldFoam() {
      if (mycoffeeorderDetails.coldFoamBool === true) {
        cf = "\nCold Foam : Yes \n";
        return cf;
      } else {
        return emptyVariable;
      }
    }
    /////////////
    function chocoDrizz() {
      if (mycoffeeorderDetails.chocolateDrizzleBool === true) {
        cd = "\nChocolate Drizzle : Yes \n";
        return cd;
      } else {
        return emptyVariable;
      }
    }
    alert(
      "Hi" +
        " " +
        mycoffeeorderDetails.customerName.firstName +
        " " +
        mycoffeeorderDetails.customerName.lastName +
        "\nYour Coffee Order is as follows: \n" +
        "Coffee Size is " +
        mycoffeeorderDetails.coffeeSize[1] +
        "\nCoffee Type:" +
        mycoffeeorderDetails.typeofCoffee[2] +
        "\nChocolate Drizzle: " +
        mycoffeeorderDetails.chocolateDrizzleBool +
        "\nDairy Choice: " +
        mycoffeeorderDetails.dairyChoice[2] +
        "\nFlavor Shot: " +
        mycoffeeorderDetails.flavourShotChoice[1] +
        sweetener() +
        chocoDrizz() +
        whippedCream() ///+ coldFoam()
    );
  },
};

let friendcoffeeorderDetails = {
  customerName: {
    firstName: "Michael",
    lastName: "Scott",
  },
  // I am gonna put f before the variables in this object literal to indicate that they belong to the friend object.
  fsize: mycoffeeorderDetails.coffeeSize[1],
  fcoffeeType: mycoffeeorderDetails.typeofCoffee[5],
  fDairy: mycoffeeorderDetails.dairyChoice[3],
  fflavorShot: mycoffeeorderDetails.flavourShotChoice[0],
  fCream: (mycoffeeorderDetails.whippedCreamBool = true),
  friendorderSum: function () {
    alert(
      "Hi " +
        friendcoffeeorderDetails.customerName.firstName +
        " " +
        friendcoffeeorderDetails.customerName.lastName +
        "\nYour Order Summary is as follows: \n" +
        "Coffee Type: " +
        this.fcoffeeType +
        "\nCoffee Size: " +
        friendcoffeeorderDetails.fsize +
        "\nDairy choice: " +
        this.fDairy +
        "\nFlavor Shot: " +
        this.fflavorShot
    );
  },
};
mycoffeeorderDetails.orderSummary();
friendcoffeeorderDetails.friendorderSum();

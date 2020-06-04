'use strict';

const SIZE_SMALL = {price: 50, callories: 20};
const SIZE_MEDIUM = {price: 75, callories: 30};
const SIZE_BIG = {price: 100, callories: 40};

const TOPPING_CHEESE = {price: 10, callories: 20};
const TOPPING_SALAD = {price: 20, callories: 5};
const TOPPING_POTATO = {price: 15, callories: 10};
const TOPPING_SPICES = {price: 15, callories: 0};
const TOPPING_MAYO = {price: 20, callories: 5};


function Burger(size) {
    
    let toppingList = [];

    this.size = size;
    this.toppings = toppingList;
    
    this.addTopping = function(topping) {
        toppingList.push(topping);

        return toppingList;
    };
}


Burger.prototype.getPrice = function() {

    let result = 
    this.toppings.reduce((acc, topping) => acc + topping['price'], 0)
    + this.size['price'];
    
    return result;
}


Burger.prototype.getCallories = function() {

    let result = 
    this.toppings.reduce((acc, topping) => acc + topping['callories'], 0)
    + this.size['callories'];
    
    return result;
}


const mediumBurger = new Burger(SIZE_MEDIUM);
const smallBurger = new Burger(SIZE_SMALL);

console.log(mediumBurger);
console.log(smallBurger);



mediumBurger.addTopping(TOPPING_MAYO);
mediumBurger.addTopping(TOPPING_POTATO);
mediumBurger.addTopping(TOPPING_SPICES);

smallBurger.addTopping(TOPPING_SPICES);
smallBurger.addTopping(TOPPING_POTATO);


console.log('Medium burger price with topping: ' + mediumBurger.getPrice());
console.log('Medium burger callories with topping: ' + mediumBurger.getCallories());


console.log('Small burger price with topping: ' + smallBurger.getPrice());
console.log('Small burger callories with topping: ' + smallBurger.getCallories());




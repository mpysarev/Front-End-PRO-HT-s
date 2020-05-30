const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
calc.set(100); 


function createCalculator(baseValue) {
       
    return {
        sum: function(argB) {
            return baseValue += argB; 
        },
        mult: function(argB) {
            return baseValue *= argB;
        },
        sub: function(argB) {
            return baseValue -= argB;
        },
        div: function(argB) {
            return baseValue /= argB;
        },
        set: function(argB) {
            return baseValue = argB; 
        }
    }
}


console.log(calc.sum(15)); // 115
console.log(calc.mult(10)); // 1150

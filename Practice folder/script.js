let arr = [];


for(let i = 1; i <= 100; i++) {
    arr.push(i);
}


arr.forEach((num) => {
    let num1 = num/3;
    let num2 = num/5;

    if(checkNum(num1) && checkNum(num2)) {
        console.log('foobar');
    }
})

arr.forEach((num) => {
    let num1 = num/3;

    if(checkNum(num1)) {
        console.log('foo');
    } 
})

arr.forEach((num) => {
    let num1 = num/5;

    if(checkNum(num1)) {
        console.log('bar');
    } 
})


function checkNum(num) {
    return (num ^ 0) === num;
}
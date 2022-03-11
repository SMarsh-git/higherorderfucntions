// ACTIVITY 1
const greet = () => {
    console.log("Hello Code Nation")
 }

const repeat = () => {
    for (let i=0; i < 4; i++){
        greet();
    }
};

repeat()

// ACTIVITY 2   .map

let myArray = [10, 20, 30, 40, 50];

let multiplyArr = myArray.map((num) => {
    return num * 3;
})
console.log(multiplyArr);



let myArray2 = [10, 20, 30, 40, 50];

let multiplyArr2 = myArray.map(p =>
     p*3
     );

console.log(multiplyArr);

//ACITVITY 3
//  Test this function to make sure it works by passing a number to the doMaths function, then passing a number and one of the four
//  maths functions, to the returned function.

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}

let doMaths = (num1) => {
    console.log(num1);
    console.log(num2);
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

doMaths(10)(5,add)
const whichGreeting = (timeofDay) => {
    console.log (`Good ${timeofDay}`);
}

const greet = (time, fn) => {
    if (time <1200){
        fn("Morning");
    } else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    } else {
        fn("Evening");
    }
}

greet (1400, whichGreeting);





const thisFunction = () => {
    return "Booya";
}

const add = (example) => {
    add2(example);
}

const add2 = (example) => {
    example();
}

add(thisFunction);


let myArray = [
    [1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10], 
    [11, 12, 13, 14, {name: "Jordan"}]
];

console.log(myArray[2][4].name)





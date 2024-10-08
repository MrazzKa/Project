document.getElementById("burger2").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open")
})

const plus = document.getElementById("butplus")
const minus = document.getElementById("butminus")
const mult = document.getElementById("butmult")
const div = document.getElementById("butdiv")


let first = document.getElementById("first")
let second = document.getElementById("second")

const result = document.getElementById("result")

let res = 0

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch(mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break
        case "*":
            res = num1 * num2;
            break
        case "/":
            res = num2 !== 0 ? num1 / num2 :"error";
            break
    }
    result.textContent = res;
}

plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus ("+");
})

minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus ("-");
})

mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus ("*");
})

div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus ("/");
})


const sinBtn = document.getElementById("sin");  // Button for sin()
const cosBtn = document.getElementById("cos");  // Button for cos()
const tgBtn = document.getElementById("tg");    // Button for tg()
const ctgBtn = document.getElementById("ctg");  // Button for ctg()

let numInput = document.getElementById("variable"); // Input for the number
const trigResult = document.getElementById("value"); // Display result

function radians(degrees) {
    return degrees * (Math.PI / 180);  // Convert degrees to radians
}

function trigCalculus(func) {
    const num = radians(parseFloat(numInput.value)) || 0;  // Convert input to radians and handle empty input
    let result;

    switch (func) {
        case "sin":
            result = Math.sin(num);
            break;
        case "cos":
            result = Math.cos(num);
            break;
        case "tg":
            result = (num % Math.PI === Math.PI / 2) ? "error" : Math.tan(num);
            break;
        case "ctg":
            result = (num % Math.PI === 0) ? "error" : 1 / Math.tan(num);
            break;
    }

    trigResult.textContent = (typeof result === "number") ? result.toFixed(2) : result;  // Round if it's a number
}

sinBtn.addEventListener("click", (event) => {
    event.preventDefault();
    trigCalculus("sin");
});

cosBtn.addEventListener("click", (event) => {
    event.preventDefault();
    trigCalculus("cos");
});

tgBtn.addEventListener("click", (event) => {
    event.preventDefault();
    trigCalculus("tg");
});

ctgBtn.addEventListener("click", (event) => {
    event.preventDefault();
    trigCalculus("ctg");
});

val.toFixed(2)
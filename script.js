const add = function (firstNumber,secondNumber) {
    return firstNumber+secondNumber
}

const subtract = function (firstNumber,secondNumber) {
    return firstNumber-secondNumber
}

const multiply = function (firstNumber,secondNumber) {
    return firstNumber*secondNumber
}

const divide = function (firstNumber,secondNumber) {
    return firstNumber/secondNumber
}

const remainder = function(firstNumber,secondNumber) {
    return firstNumber % secondNumber
}
let firstNumber = 0
let operator = [add, subtract, multiply, divide]
let secondNumber = 0

let operate = function (operator, firstNumber,secondNumber ) {
    return operator(firstNumber,secondNumber)
}


let display = document.querySelector(".display")
let buttons = document.querySelector(".wrapper")
let backspace = document.querySelector("#backspace")
let test = document.querySelector(".test")
let clear = document.querySelector("#clear")
let remain = document.querySelector(".remainder")
let dividation = document.querySelector(".divide")
let into = document.querySelector(".multiply")
let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let equals =  document.querySelector(".equals")

// Numbers

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")


one.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
two.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
three.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
four.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
five.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
six.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
seven.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
eight.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
nine.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})
zero.addEventListener("click", (e) => {
    return display.textContent += e.target.textContent
})

// operators

givenOperator = ""

remain.addEventListener("click", (e) => {
    givenOperator += e.target.textContent
    return display.textContent += e.target.textContent
})
dividation.addEventListener("click", (e) => {
    givenOperator += e.target.textContent
    return display.textContent += e.target.textContent
})
into.addEventListener("click", (e) => {
    givenOperator += e.target.textContent
    return display.textContent += e.target.textContent
})
minus.addEventListener("click", (e) => {
    givenOperator += e.target.textContent
    return display.textContent += e.target.textContent
})
plus.addEventListener("click", (e) => {
    givenOperator += e.target.textContent
    return display.textContent += e.target.textContent
})

clear.addEventListener("click", () => {
    return display.textContent = display.textContent.slice(-1,0)
})

equals.addEventListener("click", () => {
    [firstNumber, secondNumber] = display.textContent.split(givenOperator)
     console.log(firstNumber)
     console.log(secondNumber)
           
})

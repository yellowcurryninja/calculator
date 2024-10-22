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

display.textContent = ''

buttons.addEventListener("click", (e) => {
    const isButton = e.target.nodeName === "BUTTON"
    if (!isButton) {
        return
    }
    display.textContent += e.target.textContent
})

backspace.addEventListener("click", () => {
    display.textContent.slice(0,-1)
})




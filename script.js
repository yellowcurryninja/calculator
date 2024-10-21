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
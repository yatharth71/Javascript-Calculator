// Defining Constants
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let number1 = document.getElementById("text1");
let number2 = document.getElementById("text2");
let result = document.getElementById("result");
result.innerHTML = '<h1 id="result">Result : 0</h1>'

// Writing the logic
add.addEventListener("click", e => {
    r = parseInt(number1.value) + parseInt(number2.value);
    result.innerHTML = `<h1>Result : ${r}</h1>`
})
subtract.addEventListener("click", e => {
    r = parseInt(number1.value) - parseInt(number2.value);
    result.innerHTML = `<h1>Result : ${r}</h1>`
})
divide.addEventListener("click", e => {
    r = parseInt(number1.value) / parseInt(number2.value);
    result.innerHTML = `<h1>Result : ${r}</h1>`
})
multiply.addEventListener("click", e => {
    r = parseInt(number1.value) * parseInt(number2.value);
    result.innerHTML = `<h1>Result : ${r}</h1>`
})
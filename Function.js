// FUNCTION
// Tempat untuk menyimpan baris code

// -- Function Declaration
/*
    function functionName(){
        Block Of Code
    }
*/
// 1. Build
function showConsole(){
    console.log('Hello, World!')
}

// 2. Call
showConsole()

// Hoisting --> Call dulu baru kita build
Penjumlahan()
Penjumlahan()
Penjumlahan()
function Penjumlahan(){
    console.log(1 + 1)
}


// -- Function Expression
// Yaitu function yang dimasukkan ke dalam variable
const Pengurangan = function(){ //function() --> disebut dengan function anonymous
console.log(1 -1)
}
Pengurangan()

// -- Arrow Function
const Perkalian = () => {
    const num1 = 5
    const num2 = 10

    console.log(num1 * num2)
}
Perkalian()

// FUNCTION WITH PARAMETER
const Pembagian = (num1, num2) => {
    console.log(num1 / num2)
}
Pembagian(10, 5)

function Perkaliannn(num1, num2){
    console.log(num1 * num2)
}
Perkaliannn(3, 3)

// FUNCTIONNWITH RETURN
const Penjumlahan1 = (num1, num2) => {
    return num1 + num2
}
console.log(Penjumlahan1(3, 3) + 3)
console.log(Penjumlahan1(3, 5))

// FUNCTION WITH REST PARAMETERS
const showNumber = (a,b, c, ...manyMore) => {
    console.log(manyMore)
}
showNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// FUNCTION WITH DEFAULT PARAMETER
const welcomingName = (name) => {
    console.log(`Welcome, ${name}!`)
}
welcomingName('Rahma')

// RECURSIVE FUNCTION
const countDown = (num) => {
    console.log(num)
    num --

    if(num > 0){
        return countDown(num)
    }

    return num
}
console.log(countDown(5))

// CLOSURE FUNCTION : Inner function yang dapat mengakses variable dari outer function
const greeting = () => {
    const name = 'Defryan'

    const showGreeting = () => {
        console.log(`Welcome, ${name}`)
    }
}
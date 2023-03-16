// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// ask a word to user with prompt


// const userWord = prompt("write a word to check if it is palindrome"); 
// console.log(userWord);

// //create a reverseWord function with split and reverse

// function reverseWord (word) {

//    const splitWord = word.split(""); 
//    const reverseList = splitWord.reverse(); 
//    const reverseText = reverseList.join(""); 

//    return reverseText
// } 

// const reversUserWord = (reverseWord(userWord));

// //Create a if condition to check if the reverse word === original one. 

// if (reversUserWord === userWord) {
//     alert(`${userWord} is palindrome`)
// } else {
//     alert (`${userWord} isn't palindrome`)
// }




// tools


// prompt
// funtion
// if/else
// console.log
// /variables






// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



// Ask to user if select even or odd

const userChoice = prompt("even or odd?")

// Ask to user a number beetween 1 and 5 

const userNumber = Number(prompt("Choose a number from 1 to 5"))

//Use Math random with math ceil to select a CPU's number 

const cpuNumber = Math.ceil(Math.random() * 5);
console.log(cpuNumber);
alert(`CPU number is ${cpuNumber}`)

//sum the numbers

const sum = userNumber + cpuNumber

//check if the sum is even or odd with a if condition 

let result = ""

if (sum % 2 === 0) {

    result = "even"
} else {
    result = "odd"
}


if (userChoice === result) {
    alert("User Win")
} else {
    alert("CPU Win ")
}

//check who the winner with a if condition



//tools

//prompt
// alert
//if
// function
//math ceil
// math random
// variables 

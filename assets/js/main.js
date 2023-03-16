// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// ask a word to user with prompt

const palindromeInputEl = document.querySelector(".palindrome_input");
const userWord = palindromeInputEl.value;
// const userWord = prompt("write a word to check if it is palindrome");

const palindromeSubmitEl = document.getElementById("palindrome_submit");
const reversUserWord = (reverseWord(userWord));
const evenOrOddSectionEl = document.getElementById("even_or_odd");


palindromeSubmitEl.addEventListener("click",

    function () {
        const palindromeSectionEl = document.getElementById("palindrome");
        const palindromeResult = document.createElement("div");
        palindromeSectionEl.append(palindromeResult)

        if (reversUserWord === userWord) {
            palindromeResult.append(`access allowed`)
            palindromeResult.style.backgroundColor = "green"
            evenOrOddSectionEl.classList.add("d-block")

        } else {
            palindromeResult.append(`access denied`)
            palindromeResult.style.backgroundColor = "red"
        }

        palindromeInputEl.value = ""
        console.log(userWord);
    }

)



//create a reverseWord function with split and reverse

function reverseWord(word) {

    const splitWord = word.split("");
    const reverseList = splitWord.reverse();
    const reverseText = reverseList.join("");

    return reverseText
}


// //Create a if condition to check if the reverse word === original one. 




// tools


// prompt
// funtion
// if/else
// console.log
// /variables






// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



// Ask to user if select even or odd

const evenOrOddInputEl = document.querySelector(".even_or_odd_input")

const userChoice = evenOrOddInputEl.value
const numberSection = document.querySelector(".number_section")
const evenOrOddSubmitEl = document.getElementById("even_or_odd_submit")
evenOrOddSubmitEl.addEventListener("click",

    function () {
        const evenOrOddResult = document.createElement("div");
        evenOrOddSectionEl.append(evenOrOddResult);
        evenOrOddResult.append(userChoice);
        console.log(userChoice);
        numberSection.classList.add("d-block")

     
    }

)


// Ask to user a number beetween 1 and 5 

// const userNumber = Number(prompt("Choose a number from 1 to 5"))

//Use Math random with math ceil to select a CPU's number 


const userNumberSubmitEl = document.getElementById("number_submit")
const userNumberInputEl = document.querySelector(".number_input")
const resultSectionEl = document.querySelector(".result_section")

const userNumber = userNumberInputEl.value
userNumberSubmitEl.addEventListener("click",

    function () {
        const userNumberResult = document.createElement("div");
        numberSection.append(userNumberResult);
        userNumberResult.insertAdjacentHTML = userNumber;
        console.log(userNumber);
        resultSectionEl.classList.add("d-block")

     
    }

)



 cpuNumber = random_number_in_a_int_range(1,5) 
 console.log(cpuNumber);



//  alert(`CPU number is ${cpuNumber}`)

//sum the numbers

const sum = userNumber + cpuNumber

//check if the sum is even or odd with a if condition 


function isEven(numb) {

    let result = false

    if (numb % 2 === 0) {

        result = true
    }

    return result
}




//check who the winner with a if condition

if (userChoice === "even" && sumEven(sum) || userChoice === "odd" && !sumEven(sum)) {
    alert("User Win")
} else {
    alert("CPU Win ")
}




//functions

function random_number_in_a_int_range(min, max) {

    randomNumber = Math.ceil(Math.random(max - min) + 1);
    return randomNumber

}

//tools

//prompt
// alert
//if
// function
//math ceil
// math random
// variables 

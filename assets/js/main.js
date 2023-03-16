// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// ask a word to user with prompt
function reverseWord(word) {

    const splitWord = word.split("");
    const reverseList = splitWord.reverse();
    const reverseText = reverseList.join("");

    return reverseText
}






// const userWord = prompt("write a word to check if it is palindrome");

const palindromeSubmitEl = document.getElementById("palindrome_submit");

const evenOrOddSectionEl = document.getElementById("even_or_odd");


palindromeSubmitEl.addEventListener("click",

    function () {
        let userWord = document.querySelector(".palindrome_input").value;
        console.log(userWord);
        const palindromeSectionEl = document.getElementById("palindrome");
        const palindromeResult = document.createElement("div");
        palindromeSectionEl.append(palindromeResult)
        const reverseUserWord = (reverseWord(userWord));
        if (reverseUserWord === userWord) {
            palindromeResult.append(`access allowed`)
            palindromeResult.style.backgroundColor = "green"
            evenOrOddSectionEl.classList.add("d-block")

        } else {
            palindromeResult.append(`access denied`)
            palindromeResult.style.backgroundColor = "red"
        }

        userWord = ""
        console.log(userWord);
    }

)



//create a reverseWord function with split and reverse



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
let userChoice = "";
const numberSection = document.querySelector(".number_section")
const evenOrOddSubmitEl = document.getElementById("even_or_odd_submit")
evenOrOddSubmitEl.addEventListener("click",

    function () {

        userChoice = document.querySelector(".even_or_odd_input").value
        console.log(userChoice);

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



const userNumberSubmitEl = document.getElementById("number_submit");
const cpuNumberSectionEl = document.querySelector(".cpu_number_section")
let userNumber = 0;
let cpuNumber = 0; 

userNumberSubmitEl.addEventListener("click",

    function () {

        userNumber = document.querySelector(".number_input").value;
        const userNumberResult = document.createElement("div");
        numberSection.append(userNumberResult);
        userNumberResult.append(userNumber);
        console.log(userNumber);
        cpuNumberSectionEl.classList.add("d-block");

         cpuNumber = random_number_in_a_int_range(1, 5);
         const cpuNumberResult = document.createElement("div");
         cpuNumberSectionEl.append(cpuNumberResult);
         cpuNumberResult.append(cpuNumber);
         console.log(cpuNumber);

      

    }

)



const sum = userNumber + cpuNumber

function isEven(numb) {

    let result = false

    if (numb % 2 === 0) {

        result = true
    }

    return result
}

if (userChoice === "even" && sumEven(sum) || userChoice === "odd" && !sumEven(sum)) {
    alert("User Win")
} else {
    alert("CPU Win ")
}


function random_number_in_a_int_range(min, max) {

    randomNumber = Math.ceil(Math.random(max - min) + 1);
    return randomNumber

}






//  alert(`CPU number is ${cpuNumber}`)

//sum the numbers


//check if the sum is even or odd with a if condition 






//check who the winner with a if condition





//functions


//tools

//prompt
// alert
//if
// function
//math ceil
// math random
// variables 

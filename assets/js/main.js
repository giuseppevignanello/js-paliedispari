// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// ask a word to user with prompt

const userWord = prompt("write a word to check if it is palindrome"); 
console.log(userWord);

//create a reverseWord function with split and reverse

function reverseWord (word) {

   const splitWord = word.split(""); 
   const reverseList = splitWord.reverse(); 
   const reverseText = reverseList.join(""); 

   return reverseText
} 

const reversUserWord = (reverseWord(userWord));

//Create a if condition to check if the reverse word === original one. 

if (reversUserWord === userWord) {
    alert(`${userWord} is palindrome`)
} else {
    alert (`${userWord} isn't palindrome`)
}


// tools


// prompt
// funtion
// if/else
// console.log
// /variables










// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
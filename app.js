
console.log("gulburak");

const form=document.querySelector("form");
const randomNumber =  randomNumberGeneretor();
console.log(randomNumber);
let  guess = 1;

 

document.getElementById("button").onclick = function(){
      
    // number guessed by user     
    const guessNumber = document.getElementById("guessNumber").value;
    
    if( randomNumber== guessNumber)
    {    
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                + guess + " GUESS ");    
                       
    }
    else if(randomNumber<guessNumber) 
    {    
        guess++;
        alert("ENTER A SMALLER NUMBER");
        console.log(randomNumber + guessNumber);
        console.log(guess);
    }
    else if (randomNumber>guessNumber) 
    {
        guess++;
        alert("ENTER A GREATER NUMBER")
        console.log(guess);
    }
    else if (null==guessNumber) 
    {
        alert("ENTER A NUMBER")
        console.log(guess);
    } else {
        alert("PLEASE ENTER A VALID NUMBER!")
    }
    form.reset()
 }

 function randomNumberGeneretor(){
    return Math.floor(Math.random() * 100 + 1);
 }

const max=100
const min=1
let randomNum=(parseInt(Math.random()*(max-min+1)+min))
console.log(randomNum)
const submit=document.querySelector('.guessSubmit')
const input=document.querySelector('.guessField')
const guesses=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]
let count =0

let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess =parseInt(input.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a number')
    }else if(guess<1){
        alert('please enter a number greater than 0')
    }else if(guess>100){
        alert('please enter a number LESS than 101')
    }else{
        prevGuess.push(guess)
        if(count==9){    
            cleanguess(guess)
            displayMessage(`game over : number was${randomNum}`)
            endGame()
        }else{
            cleanguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess==randomNum){
        displayMessage(`you guessed it right`)
        endGame()
    }else if(guess<randomNum){
          displayMessage(`number is too low`)
    }else{
        displayMessage(`number is too high`)
    }
}
function cleanguess(guess){
    input.value=''
    guesses.innerHTML+=`${guess} `
    count++;
    lastResult.innerHTML=`${10-count}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
const newgamebutton =document.querySelector('#newgame')
newgamebutton.addEventListener('click',function(e){
    randomNum=(parseInt(Math.random()*(max-min)+1))
    prevGuess=[];
    count=0;
    guesses.innerHTML='';
    lastResult.innerHTML=`${10-count}`;
    input.removeAttribute('disabled')
    submit.removeAttribute('disabled')
    startOver.removeChild(p)
    lowOrHi.innerHTML = "";
    playGame=true

})
}

function endGame(){
    input.value='';
    input.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgame">start new game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
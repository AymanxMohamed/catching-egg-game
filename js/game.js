import * as generalFunctions from './generalFunctions.js'
import * as users from './users.js'
import {Basket} from './Basket.js'
import {Egg} from './Egg.js'

let eggs = [];
let userName = generalFunctions.getQueryStringObject(location.search).username;
let scoreSpan = generalFunctions.addScore(window); 
let timerSpan = generalFunctions.addTimer(window);
const scoreMessage  = document.getElementById("scoreMessage");
const finalScore = document.getElementById("finalScore");
const playAgainBtn = document.getElementById("playAgainBtn");
const backHome = document.getElementById("backHome");
const gameOverPanal = document.querySelector(`#gameOverPanal`);
let homeButton = document.querySelector(`.home`);
let reloadButton = document.querySelector(`.reload`);
let gameSound = new Audio('../sounds/Country_Music_Farm_Game.mp3');
export let clickSound = new Audio('../sounds/effects/click.wav');
let congratulationSound = new Audio('../sounds/effects/voice_congratulats.ogg');
let gameOverSound = new Audio('../sounds/effects/voice_game_over.ogg');
const target = 20;

let basket = new Basket();




window.addEventListener(`DOMContentLoaded`, async function(){
    gameSound.play();
    let userLastLoginDate = await users.getUserLastLoginDate(userName);
    users.addUserInfo({userName, userLastLoginDate}, window);
    generalFunctions.addTarget(window);
})// window onload event listner



let isUserWon = function ()
{
    console.log(parseInt(scoreSpan.innerText));
    if (parseInt(scoreSpan.innerText) >= target)
        return true;
    return false;
}

let intervalId = setInterval(() => {
        let egg = new Egg(basket, scoreSpan);
        eggs.push(egg);
        timerSpan.innerText = (parseInt(timerSpan.innerText) - 1);
        if ((parseInt(timerSpan.innerText) == 0))
        {
            eggs.forEach(egg => egg.destroyEgg());
            gameOverHandling(isUserWon());
            clearInterval(intervalId);
        }
    }, 1000);

const gameOverHandling = function (winOrNot) 
{
    gameSound.pause();
    winOrNot ? congratulationSound.play() : gameOverSound.play();
    generalFunctions.addStyleToObject(gameOverPanal, {"display" : "flex"});
    basket.body.remove();   
    scoreMessage.innerText = `${winOrNot? "Congratulation" : "Unfortunately"} ${userName} you ${winOrNot? "won" : "lost"}`;
    finalScore.innerText = `${parseInt(scoreSpan.innerText)}`;
}


/* buttons events */
homeButton.addEventListener('click', () => {
    clickSound.play();
    users.postUser({name: userName});
    open(`../index.html`, `_current`);
})

reloadButton.addEventListener('click', () => {
    clickSound.play();
    users.postUser({name: userName});
    window.location.reload();
})


playAgainBtn.addEventListener('click', function () 
{
    clickSound.play();
    users.postUser({name: userName});
    window.location.reload();
});
backHome.addEventListener('click', function () 
{
    clickSound.play();
    users.postUser({name: userName});
    open(`../index.html`, `_current`);
});
import * as generalFunctions from './generalFunctions.js'

let takeEggSound = new Audio('../sounds/effects/takeEggSound.wav');

export class Egg 
{
    #top;
    #left;
    #intervalId;
    #basket;
    #score;
    constructor (basket, score)
    {
        this.#score = score;
        this.#basket = basket;
        this.#top = 0;
        this.body = this.#createEggObject();
        this.setLeft(Math.floor(Math.random() * (window.innerWidth - this.body.clientWidth)));
        this.#fall();
    }
    #checkWin()
    {
        let eggLeft = parseInt(this.body.style["left"]);
        let basketLeft = parseInt(this.#basket.body.style["left"]);
        let eggTop = parseInt(this.body.style["top"]);
        
        if (eggLeft >= basketLeft && eggLeft <= (basketLeft + 100) && eggTop == 600 )
        {
            this.#score.innerText = (parseInt(this.#score.innerText) + 1);
            takeEggSound.play();
            this.destroyEgg();
        }
    }
    setTop(value){
        if (value >= 0 && value <= (window.innerHeight - this.body.clientHeight))
        {
            this.#top = value; 
            this.appendStyle({"top": `${this.#top}px`});
            
        }
        if (this.#top >= (window.innerHeight - this.body.clientHeight - 10))
        {
            this.body.setAttribute("src","../assets/images/objects/object_006_broken_egg.png" )
            this.appendStyle({"top": `${(window.innerHeight - this.body.clientHeight) + 5}px`})
            clearInterval(this.#intervalId);
            setTimeout(() => {
                this.destroyEgg();
            }, 2000);
        }
        this.#checkWin()
    }
    setLeft (value) { 
        if (value >= 0 && value <= (window.innerWidth - this.body.clientWidth))
        {
            this.#left = value;
            this.appendStyle({"left": `${this.#left}px`});
        }
    }
    #fall()
    {
        this.#intervalId = setInterval(() => this.setTop(this.#top + 10), 30);
    }
    
    appendStyle(styleObject) {
        generalFunctions.addStyleToObject(this.body, styleObject);
    }
    #createEggObject()
    {
        let egg = document.createElement(`img`);
        egg.setAttribute("src", "../assets/images/objects/object_014_egg.png");

        let styleObject = 
        {
            "position" : "absolute",
            "border-radius" : "50%",
            "width" : "50px",
            "top": `${this.#top}px`,
            "left": `${this.#left}px`,

            "background-color" : `${super.Color}`
        }
        generalFunctions.addStyleToObject(egg, styleObject);
        document.body.prepend(egg);
        return egg;
    }
    destroyEgg()
    {
        this.body.remove();
    }
}
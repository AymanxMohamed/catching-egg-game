import * as generalFunctions from './generalFunctions.js'

export class Basket
{
    #left;
    constructor (_left = 0)
    {
        this.#left = _left;
        this.body = this.#createBasketObject();
        generalFunctions.addBasketEvent(this);
    }
    setLeft (value) { 
        if (value >= 0 && value <= (window.innerWidth - this.body.clientWidth))
        {
            this.#left = value;
            this.appendStyle({"left": `${this.#left}px`});
        }
    }
    MoveBall(direction)
    {
        this.setLeft(direction);
    }
    appendStyle(styleObject) {
        generalFunctions.addStyleToObject(this.body, styleObject);
    }
    #createBasketObject()
    {
        let basket = document.createElement(`img`);
        basket.setAttribute("src", "../assets/images/objects/object_001_basket.png");
        
        let styleObject = 
        {
            "position" : "absolute",
            "border-radius" : "50%",
            "width" : "100px",
            "height" : "100px",
            "top": `620px`,
            "left": `${this.#left}px`,
        }
        generalFunctions.addStyleToObject(basket, styleObject);
        document.body.append(basket);
        return basket;
    }
}
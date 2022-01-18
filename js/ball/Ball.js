class Ball extends Shape
{
    #top;
    #left;
    constructor (_color = `blue`, _top = 0, _left = 0)
    {
        super(_color);
        this.#top = _top;
        this.#left = _left;
        this.body = this.#createBallObject();
        addBallEvent(this);
    }
    setTop(value){
        if (value >= 0 && value <= (window.innerHeight - this.body.clientHeight))
        {
            this.#top = value; 
            this.appendStyle({"top": `${this.#top}px`});
            
        }
    }
    setLeft (value) { 
        if (value >= 0 && value <= (window.innerWidth - this.body.clientWidth))
        {
            this.#left = value;
            this.appendStyle({"left": `${this.#left}px`});
        }
    }
    fall()
    {
        setInterval(() => this.setTop(this.#top + 10), 20);
    }
    
    appendStyle(styleObject) {
        addStyleToObject(this.body, styleObject);
    }
    MoveBall(direction)
    {
        let step = 10;
        switch (direction)
        {
        case `right`:
            this.setLeft(this.#left + step);
            break;
        case `left`:
            this.setLeft(this.#left - step);
            break;
        case `up`:
            this.setTop(this.#top - step);    
            break;
        case `down`:
            this.setTop(this.#top + step);
            break;
        }
    }
    #createBallObject()
    {
        let ball = document.createElement(`div`);
        let styleObject = 
        {
            "position" : "absolute",
            "border-radius" : "50%",
            "width" : "100px",
            "height" : "100px",
            "top": `${this.#top}px`,
            "left": `${this.#left}px`,

            "background-color" : `${super.Color}`
        }
        addStyleToObject(ball, styleObject);
        document.body.append(ball);
        return ball;
    }
}
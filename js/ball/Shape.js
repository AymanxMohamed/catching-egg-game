class Shape
{
    //private members
    #color;
    constructor (color)
    {
        this.#color = color;
    }
    // proberties setters and getters
    get Color() { return this.#color; }
    set Color(value) { this.#color = value; }
}
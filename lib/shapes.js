class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    render() {
        // returns circle with color
        // seems like a hack to set coordinates to 0, will be overwritten later
        return `<circle cx="0" cy="0" r="0" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        // returns rect (square) with color
        // seems like a hack to set coordinates to 0, will be overwritten later
        return `<rect x="0" y="0" width="0" height="0" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    // returns triangle with color
        // seems like a hack to set coordinates to 0, will be overwritten later
        render() {
        return `<polygon points="0,0 0,0 0,0" fill="${this.color}" />`
    }
}

// export classes circle, square and triangle
module.exports = {Circle, Square, Triangle};
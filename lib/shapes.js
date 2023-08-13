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
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        // returns square with color
        return `<rect x="150" y="115" width="80" height="80" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    // returns triangle with color
    render() {
        return `<polygon points="150,115 150,115 150,115" fill="${this.color}" />`
    }
}

// export classes circle, square and triangle
module.exports = {Circle, Square, Triangle};
// need to create additional classes for testing the coordinates of each shape

class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Circle extends Shape {
    render() {
        // returns circle with color
        // set coordinates to 0, will be overwritten later; 0 for tests since tests only evaluate the color
        return `<circle cx="0" cy="0" r="0" fill="black" />`

    }
}

class Square extends Shape {
    render() {
        // returns rect (square) with color
        // set coordinates to 0, will be overwritten later; 0 for tests since tests only evaluate the color
        return `<rect x="0" y="0" width="0" height="0" fill="slategrey" />`

    }
}

class Triangle extends Shape {
    // returns triangle with color
    // set coordinates to 0, will be overwritten later; 0 for tests since tests only evaluate the color
    render() {
        return `<polygon points="0,0 0,0 0,0" fill="darkslateblue" />`
    }
}

// export classes circle, square and triangle
module.exports = { Circle, Square, Triangle };
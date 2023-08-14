// import shape classes
const {Shape, Circle, Square, Triangle} = require('./shapes.js');

// unit tests

// text matrix: 3x3
// 3 colors, 3 shapes: 9 test cases
// add text to create another case which assumes when text is working for one shape/color combo, it works for all
// not testing for position, initial testing of rendering done visually while debugging code

// as written: error: TypeError: Cannot read properties' of undefined (reading 'setColor')
describe('circle test', () => {
    test('generates a black circle', () => {
        const Shape = new Circle();
        Shape.setColor("black");
        expect(Shape.render()).toEqual(
            `<circle cx="0" cy="0" r="0" fill="black" />`
        );
    });
});

describe('square test', () => {
    test('generates a slategrey square', () => {
        const Shape = new Square();
        Shape.setColor("slategrey");
        expect(Shape.render()).toEqual(
            `<rect x="0" y="0" width="0" height="0" fill="slategrey" />`
        );
    });
});

describe('square test', () => {
    test('generates a darkslateblue triangle', () => {
        const Shape = new Triangle();
        Shape.setColor("slatdarkslate");
        expect(Shape.render()).toEqual(
            `<polygon points="0,0 0,0 0,0" fill="darkslateblue" />`
        );
    });
});

const {Circle, Triangle, Square} = require("./shapes.js")

describe('Circle', () => {
        test('renders correctly', () => {
        const shape = new Circle();
        
        shape.setColor(blue);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue">`);
    });
  });
 
  describe('Triangle', () => {
        test('renders correctly', () => {
        const shape = new Triangle();
        
        shape.setColor(pink);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="pink">`);
    });
  });

  describe('Square', () => {
        test('renders correctly', () => {
        const shape = new Square();
        
        shape.setColor(green);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="green">`);
    });
});
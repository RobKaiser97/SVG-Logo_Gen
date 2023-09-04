const shapes = require('../lib/shapes');
const { Shape, Circle, Square, Triangle } = shapes;

describe('Shape class tests', () => {
  it('should throw an error when render is called on the base Shape class', () => {
    const shape = new Shape('blue');
    expect(() => shape.render()).toThrow('Children must implement render()');
  });
});

describe('Circle class tests', () => {
  it('renders correctly', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="100" fill="red" />');
  });
});

describe('Square class tests', () => {
  it('renders correctly', () => {
    const square = new Square('blue');
    expect(square.render()).toBe('<rect x="50" width="200" height="200" fill="blue" />');
  });
});

describe('Triangle class tests', () => {
  it('renders correctly', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
  });
});

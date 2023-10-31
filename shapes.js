//make classes for shapes

class Shape {

  constructor() {
    this.color = 'black'; // Default color
  }

  setColor(color) {
    this.color = color;
  }

  render() {

  }
}
//circle
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}
// triangle
class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}
// square
class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}
//export shapes
module.exports = { Circle, Triangle, Square };
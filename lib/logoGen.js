class SVG {
  constructor() {
    this.shapes = "";
    this.text = "";
  }

  generateSVG() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        ${this.shapes} ${this.text}
        </svg>`;
  }

  addShape(shapes) {
    this.shapes += shapes.render();
  }

  addText(input, color) {
    this.text = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
         fill="${color}" font-family="sans-serif" font-size="60">${input}</text>`;
  }
}

module.exports = SVG;

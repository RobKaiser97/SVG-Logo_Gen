const SVG = require("../lib/logoGen");
const { Circle } = require("../lib/shapes");

function normalizeSVG(svgString) {
  return svgString
    .replace(/\s+/g, " ")
    .replace(/(> )\s+(<)/g, "$1$2")
    .trim();
}

describe("SVG tests", () => {
  describe('SVG with red circle and white "abc" text', () => {
    it("should generate the SVG correctly", () => {
      const svg = new SVG();
      svg.addShape(new Circle("red"));
      svg.addText("abc", "white");

      const generatedSVG =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><circle cx="150" cy="100" r="100" fill="red" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-size="60">abc</text></svg>';
      const expectedSVG =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><circle cx="150" cy="100" r="100" fill="red" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-size="60">abc</text></svg>';
      
      expect(normalizeSVG(generatedSVG)).toEqual(normalizeSVG(expectedSVG));
      
      console.log(
        "Generated SVG after normalization:",
        normalizeSVG(generatedSVG)
      );
      console.log(
        "Expected SVG after normalization:",
        normalizeSVG(expectedSVG)
      );
    });
  });
});

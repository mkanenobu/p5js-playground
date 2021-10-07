import p5 from "p5";

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400);
  };

  p.draw = () => {};
};

new p5(sketch);

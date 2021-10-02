import p5 from "p5";

const pointer = (p: p5) => {
  p.setup = () => {
    console.log("pointer");
    p.noCursor();
    p.createCanvas(640, 480);
  };

  p.draw = () => {
    const pointX = p.mouseX;
    const pointY = p.mouseY;

    p.clear();
    if (p.mouseIsPressed) {
      p.stroke("red");
      p.ellipse(pointX, pointY, 20, 20);
    } else {
      p.stroke("black");
    }

    p.line(pointX, 0, pointX, 480);
    p.line(0, pointY, 640, pointY);
  };
};

new p5(pointer);

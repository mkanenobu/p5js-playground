import p5 from "p5";

// https://p5js.org/examples/structure-setup-and-draw.html
export const line = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400);
    p.frameRate(30);
    p.stroke("white");
  };

  let y = 100;
  p.draw = () => {
    p.background("black"); // 背景色を描画、ここで前回のdrawで描画した白い線は消える

    y = y - 1;
    if (y < 0) {
      y = p.height;
    }
    p.line(0, y, p.width, y);
  };
};

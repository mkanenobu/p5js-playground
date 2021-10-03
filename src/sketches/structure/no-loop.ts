import p5 from "p5";

const noLoop = (p: p5) => {
  let y: number;

  p.setup = () => {
    p.createCanvas(720, 400);
    p.stroke(255);
    // noLoop だと draw 内の処理は一度しか呼び出されない、それ以外の場合は繰り返し実行される
    p.noLoop();

    y = p.height * 0.5;
  };

  p.draw = () => {
    p.background("black");
    y = y - 1;
    if (y < 0) {
      y = p.height;
    }
    p.line(0, y, p.width, y);
  };
};

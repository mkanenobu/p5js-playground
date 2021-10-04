import p5 from "p5";
import { sleep } from "../lib/time";

export const rainDrop = (p: p5) => {
  // 広がっていく同心円を描画
  const drawDrop = (x: number, y: number, w: number, h: number) => {
    p.stroke(255);
    p.noFill();
    p.ellipse(x, y, w, h);
  };

  p.setup = () => {
    p.createCanvas(640, 480);
    p.background(0);
    p.frameRate(15);
  };

  p.draw = () => {
    p.background(0, 30);
  };

  p.mouseClicked = () => {
    const [x, y] = [p.mouseX, p.mouseY];
    for (let i = 0; i * 25 < Math.max(p.height, p.width); i++) {
      sleep(i * 200).then(() => {
        drawDrop(x, y, i * 50, i * 50);
      });
    }
  };
};

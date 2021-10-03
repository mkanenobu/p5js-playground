import p5 from "p5";

/**
 * 基本図形
 *
 * triangle 三角形、三点それぞれの座標を指定
 * rect 正方形、基準（左上）の座標と幅と高さを指定
 * quad 四角形、四点それぞれの座標を指定
 * arc  弧、中心座標と高さ、幅などを指定
 */
export const shapePrimitives = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400);
    p.background(0);
    p.noStroke();

    p.fill(204);
    p.triangle(18, 18, 18, 360, 81, 360);

    p.fill(102);
    p.rect(81, 81, 63, 63);

    p.fill(204);
    p.quad(189, 18, 216, 18, 216, 360, 144, 360);

    p.fill(255);
    p.ellipse(252, 144, 72, 72);

    p.fill(204);
    p.triangle(288, 18, 351, 360, 288, 360);

    p.fill(255);
    p.arc(479, 300, 280, 280, p.PI, p.TWO_PI);
  };
};

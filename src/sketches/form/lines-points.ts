import p5 from "p5";

export const linesPoints = (p: p5) => {
  p.setup = () => {
    let d = 70;
    let p1 = d;
    let p2 = p1 + d;
    let p3 = p2 + d;
    let p4 = p3 + d;

    p.createCanvas(720, 400);
    p.background(0);
    p.noSmooth();

    // translate() 基準となる座標(0,0)をずらす
    // これ以降の 0,0 == これ以前の 140,0
    p.translate(140, 0);

    // 線四本で四角の描画
    p.stroke(153);
    p.line(p3, p3, p2, p3);
    p.line(p2, p3, p2, p2);
    p.line(p2, p2, p3, p2);
    p.line(p3, p2, p3, p3);

    // 白い点の描画
    p.stroke(255);
    p.point(p1, p1);
    p.point(p1, p3);
    p.point(p2, p4);
    p.point(p3, p1);
    p.point(p4, p2);
    p.point(p4, p4);
  };
};

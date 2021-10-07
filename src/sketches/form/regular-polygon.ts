import p5 from "p5";

export const regularPolygon = (p: p5) => {
  p.setup = () => {
    p.createCanvas(720, 400);
  };

  const drawPolygon = (x, y, radius, npoints) => {
    let angle = p.TWO_PI / npoints;
    // beginShape で Vertex モードに入る
    p.beginShape();
    for (let a = 0; a < p.TWO_PI; a += angle) {
      let sx = x + p.cos(a) * radius;
      let sy = y + p.sin(a) * radius;
      // Vertex モードで頂点を記録していく
      p.vertex(sx, sy);
    }
    // endShape で Vertex モードが終わり記録された頂点が順番に繋がって描画される
    // CLOSE = "close" しか取れないが取らなくても動くっぽい？
    p.endShape(p.CLOSE);
  };

  p.draw = () => {
    p.background(102);

    // push は今の状態をスタックに保存する
    // これがないとそれぞれの rotate が他のポリゴンを含めたスクリーン全体に効いてしまう
    p.push();
    p.translate(p.width * 0.2, p.height * 0.5);
    p.rotate(p.frameCount / 200.0);
    // 三角形
    drawPolygon(0, 0, 82, 3);
    // pop は push でスタックに保存した状態を復元する
    p.pop();

    p.push();
    p.translate(p.width * 0.5, p.height * 0.5);
    p.rotate(p.frameCount / 50.0);
    // 20角形
    drawPolygon(0, 0, 80, 20);
    p.pop();

    p.push();
    p.translate(p.width * 0.8, p.height * 0.5);
    p.rotate(p.frameCount / -100.0);
    // 7角形
    drawPolygon(0, 0, 70, 7);
    p.pop();
  };
};

import p5 from "p5";

export const drawFunction = (p: p5) => {
  /**
   * draw*
   * 中心から外に向かって色の濃くなる同心円を描画
   *
   * @param xloc 描画座標X
   * @param yloc 描画座標Y
   * @param size サイズ
   * @param num size の中をいくつの同心円に分けるか
   */
  const drawRing = (xloc: number, yloc: number, size: number, num: number) => {
    // 同心円一つ当たりの幅
    const steps = size / num;
    // 外側の円から描画する
    for (let i = 0; i < num; i++) {
      // 描画色、1ループ目は * 0 なので真っ黒で徐々に白に近づく
      p.fill((255 / num) * i);
      // 円の描画
      const currentSize = size - i * steps;
      p.ellipse(xloc, yloc, currentSize, currentSize);
    }
  };

  p.setup = () => {
    p.createCanvas(720, 400);
    p.background(51);
    p.noStroke();
    p.noLoop();
  };

  p.draw = () => {
    drawRing(p.width * 0.25, p.height * 0.4, 200, 4);
    drawRing(p.width * 0.5, p.height * 0.5, 300, 10);
    drawRing(p.width * 0.75, p.height * 0.3, 120, 6);
  };
};

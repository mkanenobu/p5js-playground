import p5 from "p5";

/**
 * メインとは別のスクリーンのバッファを作ることが出来る
 */
export const graphicsBuffer = (p: p5) => {
  let pg: p5.Graphics;

  p.setup = () => {
    p.createCanvas(710, 400);
    p.background(0);
    // 400x250のグラフィックバッファを作成
    pg = p.createGraphics(400, 250);
  };

  p.draw = () => {
    // 透過する背景色を描画
    // 透過で一度の描画では塗りつぶされないため、前に描画した内容が残像のように残る
    p.background(0, 12);

    // カーソル位置に描画される円を描画
    p.fill(255);
    p.noStroke();
    p.ellipse(p.mouseX, p.mouseY, 60, 60);

    // バッファ分を真ん中に描画するためのオフセット
    const pgOffset = [(p.width - pg.width) / 2, (p.height - pg.height) / 2];

    // グラフィックバッファに円の白い枠線だけを描画
    pg.background(100);
    pg.noFill();
    pg.stroke(255);
    // オフセット分ずらす
    pg.ellipse(p.mouseX - pgOffset[0], p.mouseY - pgOffset[1], 60, 60);

    // image() を使用してグラフィックバッファを画面に描画
    p.image(pg, pgOffset[0], pgOffset[1]);
  };
};

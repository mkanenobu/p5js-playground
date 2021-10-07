import p5 from "p5";

export const pieChart = (p: p5) => {
  const angles = [30, 10, 45, 35, 60, 38, 75, 67];

  p.setup = () => {
    p.createCanvas(720, 400);
    p.noStroke();
    p.noLoop();
  };

  const drawPieChart = (diameter: number, data: Array<any>) => {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
      // ある範囲のvalueを別の範囲にリマップする
      // map(10, 0, 20, 100, 300) => 200
      // map(5, 0, 5, 1, 6) => 6
      let gray = p.map(i, 0, data.length, 0, 255);
      p.fill(gray);
      p.arc(
        p.width / 2,
        p.height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + p.radians(data[i])
      );
      lastAngle += p.radians(data[i]);
    }
  };

  p.draw = () => {
    p.background(100);
    drawPieChart(300, angles);
  };
};

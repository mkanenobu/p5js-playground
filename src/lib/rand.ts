export const rand = (from: number, to: number): number => {
  return Math.random() * (from - to) + from;
};

export const randomInt = (from: number, to: number): number => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min) + min);
};

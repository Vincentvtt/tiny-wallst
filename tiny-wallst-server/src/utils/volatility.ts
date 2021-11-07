// simple volatility formula taken from https://github.com/fibo/volatility
export const getVolatility = (values: number[]): number => {
  const n = values.length;

  const mean = values.reduce((a, b) => a + b, 0) / n;

  const deviation = values.reduce(
    (dev, val) => dev + (val - mean) * (val - mean),
    0
  );

  return Math.sqrt(deviation / n);
};
const uniqueByKey = <T>(array: T[], key: keyof T): T[] =>
  array.reduce(
    (x: T[], y: T) =>
      x.findIndex((e) => e[key] === y[key]) < 0 ? [...x, y] : x,
    []
  );
export default uniqueByKey;

const subtract = <T>(a: T[], b: T[], key: keyof T): T[] => {
  const bSet = b.map((it) => it[key]);

  return a.filter((o1) => !bSet.includes(o1[key]));
};
export default subtract;

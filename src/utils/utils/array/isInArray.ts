const isInArray = <T extends any>(
  arr: T[],
  compareObject: T,
  compareKey: keyof T
): boolean | undefined => {
  return (
    arr.filter((o: T) => o[compareKey] === compareObject[compareKey]).length > 0
  );
};
export default isInArray;

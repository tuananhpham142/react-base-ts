const toRecord = <T extends Record<string, any>, K extends keyof T>(
  array: T[],
  selector: K
): Record<T[K], T> => {
  if (!array) {
    return {} as Record<T[K], T>;
  }

  return array?.reduce(
    (acc, item) => ({ ...acc, [item[selector]]: item }),
    {} as Record<T[K], T>
  );
};

export default toRecord;

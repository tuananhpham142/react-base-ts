const truncate = (input: string, length: number): string => {
  if (!input) {
    return "";
  }
  return input.length > length ? `${input.substring(0, length - 1)}...` : input;
};

export default truncate;

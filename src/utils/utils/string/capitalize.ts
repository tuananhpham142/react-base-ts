const capitalize = (string: string): string => {
  if (typeof string === "string") {
    if (!string) {
      return "";
    }
    return string[0].toUpperCase() + string.slice(1);
  }
  return string;
};
export default capitalize;

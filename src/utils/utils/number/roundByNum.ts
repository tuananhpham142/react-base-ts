const roundByNum = (
  value: string | number,
  step: "0.1" | "0.25" | "0.5" | "1"
) => {
  let inverse = 1.0 / parseFloat(step);
  const valueToRound = typeof value === "number" ? value : parseFloat(value);
  return Math.round(valueToRound * inverse) / inverse;
};
export default roundByNum;

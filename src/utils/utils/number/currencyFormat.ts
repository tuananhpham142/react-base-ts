const currencyFormat = (
  value: number,
  currency?: string,
  decimals?: number
) => {
  value = parseFloat(value.toString());
  if (!isFinite(value) || (!value && value !== 0)) return "";
  currency = currency || "";
  decimals = decimals || 0;
  const stringified = Math.floor(value).toFixed(decimals);
  const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  const i = _int.length % 3;
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? "." : "") : "";
  const _float = decimals ? stringified.slice(-1 - decimals) : "";
  const sign = value < 0 ? "-" : "";
  return (
    sign +
    currency +
    head +
    _int.slice(i).replace(/(\d{3})(?=\d)/g, "$1.") +
    _float
  );
};

export default currencyFormat;

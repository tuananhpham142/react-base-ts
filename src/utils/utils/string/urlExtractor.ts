const urlExtractor = (
  value: string,
  extractIndex: "FIRST" | "LAST" | "ALL" = "ALL"
): string | Array<string> | undefined => {
  const result: Array<string> | null = value.match(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
  );
  if (extractIndex === "FIRST") {
    return result ? result[0] : undefined;
  }
  if (extractIndex === "LAST") {
    return result ? result[result.length - 1] : undefined;
  }
  if (extractIndex === "ALL") {
    return result || undefined;
  }

  return undefined;
};
export default urlExtractor;

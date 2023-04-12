const ellipsisByChar = (text: string, count: number) => {
  return {
    displayText: text.length > count ? `${text.substring(0, count)}...` : text,
    totalLength: text.length,
  };
};

export default ellipsisByChar;

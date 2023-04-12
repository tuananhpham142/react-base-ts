export const UrlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const addRedirectUrl = (
  url: string,
  redirectTo: string
): string | undefined => {
  if (UrlRegex.test(url) && UrlRegex.test(redirectTo)) {
    const param = new URLSearchParams({ redirectTo });
    return redirectTo ? url + "?" + param.toString() : url;
  }
  return undefined;
};
export default addRedirectUrl;

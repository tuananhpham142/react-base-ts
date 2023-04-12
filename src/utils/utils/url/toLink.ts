import preserveEndingSlash from "./preserveEndingSlash";

const toLink = (pattern: string, params: any = {}) => {
  const reversed = pattern
    .replace(/\w*(:\w+\??)/g, function (path, param) {
      const key = param.replace(/[:?]/g, "");
      if (params[key] === undefined) {
        if (param.indexOf("?") < 0) {
          return path;
        } else {
          return "";
        }
      } else {
        return path.replace(param, params[key]);
      }
    })
    .replace(/\/\//, "/");
  return preserveEndingSlash(pattern, reversed);
};
export default toLink;

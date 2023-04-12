const preserveEndingSlash = (pattern: string, reversed: any) => {
  const endingSlashRe = /\/$/;

  const shouldHave = endingSlashRe.test(pattern);
  const has = endingSlashRe.test(reversed);

  if (shouldHave && !has) {
    return reversed + "/";
  } else if (!shouldHave && has) {
    return reversed.slice(0, reversed.length - 1);
  }

  return reversed;
};

export default preserveEndingSlash;

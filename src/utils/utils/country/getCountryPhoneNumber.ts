import { defaultPhoneNumberFormatRegex, formatsCache } from "./constant";

function getCountryPhoneNumber(format: RegExpMatchArray | null) {
  if (!format) {
    return defaultPhoneNumberFormatRegex;
  }

  const formatValue = format[0] as string;
  let phoneNumberFormat;

  if (!formatsCache[formatValue]) {
    const phoneNumberGroups = formatValue.split("").map(Number);
    phoneNumberFormat = phoneNumberGroups.reduce((result, count, i) => {
      return `${result}(\\d{1,${count}})${i > 0 ? "?" : ""}`;
    }, "");
    formatsCache[formatValue] = new RegExp(
      `${phoneNumberFormat}${"()?".repeat(5 - phoneNumberGroups.length)}`
    );
  }

  return formatsCache[formatValue];
}
export default getCountryPhoneNumber;

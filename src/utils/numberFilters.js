const PERSIAN_NUMBERS = "۰۱۲۳۴۵۶۷۸۹";

export const enToFaNum = (en) =>
  en.toString().replace(/\d/g, (n) => PERSIAN_NUMBERS[+n]);

export const thousandSeparator = (value) => {
  if (value !== null && value !== undefined) {
    return enToFaNum(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  }
};

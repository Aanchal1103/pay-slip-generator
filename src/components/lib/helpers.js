import moment from "moment";

const formatAmount = (amount, days = 31, totalDays = 31) =>
  Math.round(amount / totalDays * days);

export const getIncomeTax = (salary, days, totalDays) => {
  let tax = 0,
    taxableAmount = 0;

  if (salary > 180000) {
    taxableAmount = salary - 180000;
    tax = 54232 + 0.45 * taxableAmount;
  } else if (salary > 87000) {
    taxableAmount = salary - 87000;
    tax = 19822 + 0.37 * taxableAmount;
  } else if (salary > 37000) {
    taxableAmount = salary - 37000;
    tax = 3572 + 0.325 * taxableAmount;
  } else if (salary > 18200) {
    taxableAmount = salary - 18200;
    tax = 0.19 * taxableAmount;
  }

  return formatAmount(tax / 12, days, totalDays);
};

export const getGrossIncome = (annualSalary, days, totalDays) =>
  formatAmount(annualSalary / 12, days, totalDays);

export const getNetIncome = (grossIncome, tax, days, totalDays) =>
  formatAmount(grossIncome - tax, days, totalDays);

export const getSuperAmount = (grossIncome, superRate, days, totalDays) =>
  formatAmount(grossIncome * superRate / 100, days, totalDays);

export const getParsedDates = startDate => {
  const date = moment(startDate),
    totalDays = date.daysInMonth(),
    days = totalDays - date.date() + 1;

  return {
    days,
    totalDays,
    startDate: date.format("DD-MM-YYYY"),
    lastDate: date.endOf("month").format("DD-MM-YYYY")
  };
};

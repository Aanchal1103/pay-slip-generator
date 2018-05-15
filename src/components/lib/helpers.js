import moment from "moment";

const formatAmount = (amount, days = 31) => Math.round(amount / 31 * days);

export const getIncomeTax = (salary, days) => {
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

  return formatAmount(tax / 12, days);
};

export const getGrossIncome = (annualSalary, days) =>
  formatAmount(annualSalary / 12, days);

export const getNetIncome = (grossIncome, tax, days) =>
  formatAmount(grossIncome - tax, days);

export const getSuperAmount = (grossIncome, superRate, days) =>
  formatAmount(grossIncome * superRate / 100, days);

export const getDaysServed = startDate => {
  const date = moment(startDate),
    days = date.daysInMonth() - date.date();

  return {
    days,
    lastDate: date.endOf("month").format("dd-mm-yyyy")
  };
};

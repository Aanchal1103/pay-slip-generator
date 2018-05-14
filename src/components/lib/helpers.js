export const getIncomeTax = salary => {
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

  return Math.round(tax / 12);
};

export const getGrossIncome = annualSalary => Math.round(annualSalary / 12);

export const getNetIncome = (grossIncome, tax) => Math.round(grossIncome - tax);

export const getSuperAmount = (grossIncome, superRate) =>
  Math.round(grossIncome * superRate / 100);

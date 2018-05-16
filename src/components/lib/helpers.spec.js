import {
  getIncomeTax,
  getGrossIncome,
  getNetIncome,
  getSuperAmount
} from "./helpers";

describe("Helpers", () => {
  it("should calculate income tax", () => {
    const tax = getIncomeTax(18200, 31, 31);
    expect(tax).toEqual(0);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(60000, 31, 31);
    expect(tax).toEqual(921);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(87000, 31, 31);
    expect(tax).toEqual(1652);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(87000, 10, 31);
    expect(tax).toEqual(533);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(180000, 31, 31);
    expect(tax).toEqual(4519);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(180000, 15, 30);
    expect(tax).toEqual(2260);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(60050, 31, 31);
    expect(tax).toEqual(922);
  });
  it("should calculate gross income", () => {
    const income = getGrossIncome(60050, 31, 31);
    expect(income).toEqual(5004);
  });
  it("should calculate net income", () => {
    const income = getNetIncome(5004, 922, 31, 31);
    expect(income).toEqual(4082);
  });
  it("should calculate super amount", () => {
    const income = getSuperAmount(5004, 9, 31, 31);
    expect(income).toEqual(450);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(120000, 31, 31);
    expect(tax).toEqual(2669);
  });
  it("should calculate gross income", () => {
    const income = getGrossIncome(120000, 31, 31);
    expect(income).toEqual(10000);
  });
  it("should calculate net income", () => {
    const income = getNetIncome(10000, 2696, 31, 31);
    expect(income).toEqual(7304);
  });
  it("should calculate super amount", () => {
    const income = getSuperAmount(10000, 10, 31, 31);
    expect(income).toEqual(1000);
  });
});

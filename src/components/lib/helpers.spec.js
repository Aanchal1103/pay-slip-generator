import {
  getIncomeTax,
  getGrossIncome,
  getNetIncome,
  getSuperAmount
} from "./helpers";

describe("Helpers", () => {
  it("should calculate income tax", () => {
    const tax = getIncomeTax(18200);
    expect(tax).toEqual(0);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(18250);
    expect(tax).toEqual(1);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(60000);
    expect(tax).toEqual(921);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(180000);
    expect(tax).toEqual(4519);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(60050);
    expect(tax).toEqual(922);
  });
  it("should calculate gross income", () => {
    const income = getGrossIncome(60050);
    expect(income).toEqual(5004);
  });
  it("should calculate net income", () => {
    const income = getNetIncome(5004, 922);
    expect(income).toEqual(4082);
  });
  it("should calculate super amount", () => {
    const income = getSuperAmount(5004, 9);
    expect(income).toEqual(450);
  });
  it("should calculate income tax", () => {
    const tax = getIncomeTax(120000);
    expect(tax).toEqual(2669);
  });
  it("should calculate gross income", () => {
    const income = getGrossIncome(120000);
    expect(income).toEqual(10000);
  });
  it("should calculate net income", () => {
    const income = getNetIncome(10000, 2696);
    expect(income).toEqual(7304);
  });
  it("should calculate super amount", () => {
    const income = getSuperAmount(10000, 10);
    expect(income).toEqual(1000);
  });
});

import React from "react";
import PropTypes from "prop-types";

import {
  getIncomeTax,
  getGrossIncome,
  getNetIncome,
  getSuperAmount,
  getParsedDates
} from "components/lib/helpers";

PaySlip.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  annualSalary: PropTypes.number.isRequired,
  superRate: PropTypes.number.isRequired,
  paymentStartDate: PropTypes.string.isRequired
};

export function PaySlip({
  firstName,
  lastName,
  annualSalary,
  superRate,
  paymentStartDate
}) {
  const { days, totalDays, startDate, lastDate } = getParsedDates(
      paymentStartDate
    ),
    grossIncome = getGrossIncome(annualSalary, days, totalDays),
    incomeTax = getIncomeTax(annualSalary, days, totalDays),
    netIncome = getNetIncome(grossIncome, incomeTax, days, totalDays),
    superAmount = getSuperAmount(grossIncome, superRate, days, totalDays);

  return (
    <div className="table-responsive table-container">
      <table className="table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Pay Period</th>
            <th>Gross Income</th>
            <th>Income Tax</th>
            <th>Net Income</th>
            <th>Super Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{firstName + " " + lastName}</td>
            <td>{startDate + " to " + lastDate}</td>
            <td>{grossIncome}</td>
            <td>{incomeTax}</td>
            <td>{netIncome}</td>
            <td>{superAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

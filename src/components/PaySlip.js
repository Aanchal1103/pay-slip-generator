import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-flexbox-grid";

import {
  getIncomeTax,
  getGrossIncome,
  getNetIncome,
  getSuperAmount,
  getDaysServed
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
  const { days, lastDate } = getDaysServed(paymentStartDate),
    grossIncome = getGrossIncome(annualSalary, days),
    incomeTax = getIncomeTax(annualSalary, days),
    netIncome = getNetIncome(grossIncome, incomeTax, days),
    superAmount = getSuperAmount(grossIncome, superRate, days);

  return (
    <Row>
      <Col>Name: </Col>
      <Col>{firstName + " " + lastName}</Col>
      <Col>Pay Period: </Col>
      <Col>{paymentStartDate + "-" + lastDate}</Col>
      <Col>Gross Income: </Col>
      <Col>{grossIncome}</Col>
      <Col>Income Tax: </Col>
      <Col>{incomeTax}</Col>
      <Col>Net Income: </Col>
      <Col>{netIncome}</Col>
      <Col>Super Amount: </Col>
      <Col>{superAmount}</Col>
    </Row>
  );
}

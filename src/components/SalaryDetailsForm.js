import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-flexbox-grid";

export class SalaryDetailsForm extends PureComponent {
  state = {
    firstName: "",
    lastName: "",
    annualSalary: 0,
    superRate: 0,
    paymentStartDate: ""
  };
  static propTypes = {
    details: PropTypes.object.isRequired,
    updateDetails: PropTypes.func.isRequired,
    showPaySlip: PropTypes.func.isRequired
  };

  onFieldUpdate = e => {
    const target = e.currentTarget;

    this.setState({
      [target.name]: target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.updateDetails(this.state);
    this.props.showPaySlip();
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <Row>
          <Col>
            <input
              name="firstName"
              className="input-field"
              type="text"
              onBlur={this.onFieldUpdate}
              required
            />
          </Col>
          <Col>
            <input
              name="lastName"
              className="input-field"
              type="text"
              onBlur={this.onFieldUpdate}
              required
            />
          </Col>
          <Col>
            <input
              name="annualSalary"
              className="input-field"
              type="number"
              onBlur={this.onFieldUpdate}
              required
            />
          </Col>
          <Col>
            <input
              name="superRate"
              className="input-field"
              type="number"
              onBlur={this.onFieldUpdate}
              required
            />
          </Col>
          <Col>
            <input
              name="paymentStartDate"
              className="input-field"
              type="datetime-local"
              onBlur={this.onFieldUpdate}
              required
            />
          </Col>
          <Col>
            <input
              name="submitButton"
              className="submit-button"
              type="submit"
            />
          </Col>
        </Row>
      </form>
    );
  }
}

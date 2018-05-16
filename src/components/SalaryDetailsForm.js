import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const TYPE_NUMBER = "number";
const TYPE_STRING = "string";

export class SalaryDetailsForm extends PureComponent {
  static state = {
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

  onFieldUpdate = (e, type = TYPE_STRING) => {
    const target = e.currentTarget,
      value = TYPE_NUMBER === type ? parseInt(target.value, 10) : target.value;

    this.setState({
      [target.name]: value
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
        <div className="form-group">
          <label>First Name:</label>
          <input
            name="firstName"
            className="form-control"
            type="text"
            onBlur={this.onFieldUpdate}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            name="lastName"
            className="form-control"
            type="text"
            onBlur={this.onFieldUpdate}
            required
          />
        </div>
        <div className="form-group">
          <label>Annual Salary:</label>
          <input
            name="annualSalary"
            className="form-control"
            type="number"
            onBlur={e => this.onFieldUpdate(e, "number")}
            required
          />
        </div>
        <div className="form-group">
          <label>Super Rate:</label>
          <input
            name="superRate"
            className="form-control"
            type="number"
            onBlur={e => this.onFieldUpdate(e, "number")}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Start Date: </label>
          <input
            name="paymentStartDate"
            className="form-control"
            type="date"
            onBlur={this.onFieldUpdate}
            required
          />
        </div>
        <div className="form-group">
          <input
            name="submitButton"
            className="btn btn-primary"
            type="submit"
          />
        </div>
      </form>
    );
  }
}

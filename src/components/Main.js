import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "actions";
import { SalaryDetailsForm, PaySlip } from ".";

class Main extends PureComponent {
  state = {
    paySlipVisible: false
  };
  static propTypes = {
    details: PropTypes.object.isRequired,
    updateDetails: PropTypes.func.isRequired
  };

  showPaySlip = () => this.setState({ paySlipVisible: true });

  render() {
    const { paySlipVisible } = this.state;
    const { details, updateDetails } = this.props;

    return (
      <React.Fragment>
        <SalaryDetailsForm
          details={details}
          updateDetails={updateDetails}
          showPaySlip={this.showPaySlip}
        />
        {paySlipVisible && <PaySlip {...details} />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return state.details;
}

export default connect(mapStateToProps, actions)(Main);

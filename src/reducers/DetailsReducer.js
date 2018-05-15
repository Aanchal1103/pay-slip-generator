import { UPDATE_DETAILS } from "actions/index";

const initialState = {
  details: {
    firstName: "",
    lastName: "",
    annualSalary: 0,
    superRate: 0,
    paymentStartDate: ""
  }
};

export default function DetailsReducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_DETAILS:
    return {
      ...state,
      details: action.details
    };

  default:
    return state;
  }
}

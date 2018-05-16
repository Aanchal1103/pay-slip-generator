export const UPDATE_DETAILS = 'update_details';

export const updateDetails = (details) => {
  return ({
    type: UPDATE_DETAILS,
    details
  });
};

import * as actions from '../actions/detailsActions';
import * as types from '../actions/types';

describe ('description actions', () => {

  it ('should create an action to handle the confirmation of the budget', () => {
    const expectedAction = {
      type: types.CONFIRM_BUDGET
    }
    expect(actions.confirmBudget()).toEqual(expectedAction);
  });

  it ('should create an action to recover data from localStorage', () => {
    const expectedAction = {
      type: types.RECOVER_DATA_FROM_LOCAL_STORAGE
    }
    expect(actions.recoverDataFromLocalStorage()).toEqual(expectedAction);
  });
});

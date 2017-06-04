import * as actions from '../actions/budgetActions';
import * as types from '../actions/types';

describe ('budget actions', () => {
  it ('should create an action to recover data from localStorage', () => {
    const expectedAction = {
      type: types.RECOVER_DATA_FROM_LOCAL_STORAGE
    }
    expect(actions.recoverDataFromLocalStorage()).toEqual(expectedAction);
  });
});

import * as actions from '../actions/descriptionActions';
import * as types from '../actions/types';

describe ('description actions', () => {

  it ('should create an action to handle the description', () => {
    const description = 'description';
    const expectedAction = {
      type: types.HANDLE_DESCRIPTION,
      payload: description
    };
    expect(actions.handleDescription(description)).toEqual(expectedAction);
  });

  it ('should create an action to handle the estimated time', () => {
    const estimatedTime = 'estimatedTime';
    const expectedAction = {
      type: types.HANDLE_ESTIMATEDTIME,
      payload: estimatedTime
    };
    expect(actions.handleEstimatedTime(estimatedTime)).toEqual(expectedAction);
  });

  it ('should create an action to handle the first step of the budget form', () => {
    const options = {};
    const expectedAction = {
      type: types.HANDLE_STEP_ONE,
      payload: options
    }
    expect(actions.handleStepOne(options)).toEqual(expectedAction);
  });

  it ('should create an action to recover data from localStorage', () => {
    const expectedAction = {
      type: types.RECOVER_DATA_FROM_LOCAL_STORAGE
    }
    expect(actions.recoverDataFromLocalStorage()).toEqual(expectedAction);
  });
});

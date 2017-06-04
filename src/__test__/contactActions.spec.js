import * as actions from '../actions/contactActions';
import * as types from '../actions/types';

describe ('contact actions', () => {

  it ('should create an action to handle the name', () => {
    const name = 'name';
    const expectedAction = {
      type: types.HANDLE_NAME,
      payload: name
    };
    expect(actions.handleName(name)).toEqual(expectedAction);
  });

  it ('should create an action to handle the email', () => {
    const email = 'email';
    const expectedAction = {
      type: types.HANDLE_EMAIL,
      payload: email
    };
    expect(actions.handleEmail(email)).toEqual(expectedAction);
  });

  it ('should create an action to handle the phone', () => {
    const phone = 'phone';
    const expectedAction = {
      type: types.HANDLE_PHONE,
      payload: phone
    };
    expect(actions.handlePhone(phone)).toEqual(expectedAction);
  });

  it ('should create an action to handle the third step of the budget form', () => {
    const options = {};
    const expectedAction = {
      type: types.HANDLE_STEP_THREE,
      payload: options
    }
    expect(actions.handleStepThree(options)).toEqual(expectedAction);
  });

  it ('should create an action to recover data from localStorage', () => {
    const expectedAction = {
      type: types.RECOVER_DATA_FROM_LOCAL_STORAGE
    }
    expect(actions.recoverDataFromLocalStorage()).toEqual(expectedAction);
  });
});

import {
  HANDLE_NAME,
  HANDLE_EMAIL,
  HANDLE_PHONE,
  HANDLE_STEP_THREE,
  CHECK_MAIL_INIT,
  CHECK_MAIL_SUCCESS,
  CHECK_MAIL_FAILURE,
  RECOVER_DATA_FROM_LOCAL_STORAGE
} from './types';
import API from '../api-client/api';

export function handleName (name) {
  return {
    type: HANDLE_NAME,
    payload: name
  }
}

export function handleEmail (email) {
  return {
    type: HANDLE_EMAIL,
    payload: email
  }
}

export function handlePhone (phone) {
  return {
    type: HANDLE_PHONE,
    payload: phone
  }
}

export function handleStepThree (options) {
  return {
    type: HANDLE_STEP_THREE,
    payload: options
  }
}

export function checkMail (email) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: CHECK_MAIL_INIT
      };
    })

    try {
      const data = await API.validation.isValidMail(email);
      dispatch(checkMailSuccess(data));
    } catch (error) {
      dispatch(checkMailFailure(error));
    }
  }
}

function checkMailSuccess (result) {
  return {
    type: CHECK_MAIL_SUCCESS,
    payload: result
  };
}

function checkMailFailure (error) {
  return {
    type: CHECK_MAIL_FAILURE,
    payload: error
  };
}

export function recoverDataFromLocalStorage () {
  return {
    type: RECOVER_DATA_FROM_LOCAL_STORAGE
  }
}

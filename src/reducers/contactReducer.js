import {
  HANDLE_NAME,
  HANDLE_EMAIL,
  HANDLE_PHONE,
  HANDLE_STEP_THREE,
  CONFIRM_BUDGET,
  CHECK_MAIL_INIT,
  CHECK_MAIL_SUCCESS,
  CHECK_MAIL_FAILURE,
  RECOVER_DATA_FROM_LOCAL_STORAGE

} from '../actions/types';
import initialState from './initialState';

export default function ActionReducer (state = initialState, action) {
  switch (action.type) {

    case HANDLE_NAME:
      localStorage.setItem('name', JSON.stringify(action.payload));
      return {
        ...state,
        name: action.payload
      }
    case HANDLE_EMAIL:
      localStorage.setItem('email', JSON.stringify(action.payload));
      return {
        ...state,
        email: action.payload
      }
    case HANDLE_PHONE:
      localStorage.setItem('phone', JSON.stringify(action.payload));
      return {
        ...state,
        phone: action.payload
      }
    case CHECK_MAIL_INIT:
      return {
        ...state,
        emailError: action.payload
      }

    case CHECK_MAIL_SUCCESS:
      return {
        ...state,
        emailError: !action.payload
      };

    case CHECK_MAIL_FAILURE:
      return {
        ...state
      };
    case HANDLE_STEP_THREE:
      return {
        ...state
      };
    case CONFIRM_BUDGET:
    return {
      ...state,
      name : '',
      email : '',
      phone : '',
      price : ''
    }
    case RECOVER_DATA_FROM_LOCAL_STORAGE:
    return {
      ...state,
      name: JSON.parse(localStorage.getItem('name')) || '',
      email: JSON.parse(localStorage.getItem('email')) || '',
      phone: JSON.parse(localStorage.getItem('phone')) || '',
    }
    default:
      return state;

  }
}

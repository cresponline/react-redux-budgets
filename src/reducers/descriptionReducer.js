import {
  HANDLE_DESCRIPTION,
  HANDLE_ESTIMATEDTIME,
  HANDLE_STEP_ONE,
  RECOVER_DATA_FROM_LOCAL_STORAGE

} from '../actions/types';
import initialState from './initialState';

export default function ActionReducer (state = initialState, action) {
  switch (action.type) {

    case HANDLE_DESCRIPTION:
      localStorage.setItem('description', JSON.stringify(action.payload));
      return {
        ...state,
        description: action.payload
      }
    case HANDLE_ESTIMATEDTIME:
      localStorage.setItem('estimatedTime', JSON.stringify(action.payload));
      return {
        ...state,
        estimatedTime: action.payload
      }
    case HANDLE_STEP_ONE:
      return {
        ...state
      };
    case RECOVER_DATA_FROM_LOCAL_STORAGE:
    return {
      ...state,
      description: JSON.parse(localStorage.getItem('description')) || '',
      estimatedTime: JSON.parse(localStorage.getItem('estimatedTime')) || '',
    }
    default:
      return state;

  }
}

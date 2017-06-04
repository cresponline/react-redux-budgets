import {
  CONFIRM_BUDGET,
  RECOVER_DATA_FROM_LOCAL_STORAGE

} from '../actions/types';
import initialState from './initialState';

export default function ActionReducer (state = initialState, action) {
  switch (action.type) {

    case CONFIRM_BUDGET:
    localStorage.removeItem('description');
    localStorage.removeItem('estimatedTime');
    localStorage.removeItem('category');
    localStorage.removeItem('subCategory');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    localStorage.removeItem('price');
    return {
      ...state,
      description : '',
      estimatedTime : '',
      category : '',
      subCategory : '',
      name : '',
      email : '',
      phone : '',
      price : ''
    }
    case RECOVER_DATA_FROM_LOCAL_STORAGE:
    return {
      ...state,
      description : JSON.parse(localStorage.getItem('description')) || '',
      estimatedTime : JSON.parse(localStorage.getItem('estimatedTime')) || '',
      category : JSON.parse(localStorage.getItem('category')) || '',
      subCategory : JSON.parse(localStorage.getItem('subCategory')) || '',
      name : JSON.parse(localStorage.getItem('name')) || '',
      email : JSON.parse(localStorage.getItem('email')) || '',
      phone : JSON.parse(localStorage.getItem('phone')) || '',
      price : JSON.parse(localStorage.getItem('price')) || '',
    }

    default:
      return state;
  }
}

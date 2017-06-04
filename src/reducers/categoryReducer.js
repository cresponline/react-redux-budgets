import {
  HANDLE_CATEGORY,
  HANDLE_SUBCATEGORY,
  HANDLE_PRICE,
  FETCH_CATEGORIES,
  FETCH_SUBCATEGORIES,
  FETCH_CATEGORIES_INIT,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_SUBCATEGORIES_INIT,
  FETCH_SUBCATEGORIES_SUCCESS,
  FETCH_SUBCATEGORIES_FAILURE,
  HANDLE_STEP_THREE,
  CONFIRM_BUDGET,
  RECOVER_DATA_FROM_LOCAL_STORAGE

} from '../actions/types';
import initialState from './initialState';

export default function ActionReducer (state = initialState, action) {
  switch (action.type) {

    case HANDLE_CATEGORY:
      localStorage.setItem('category', JSON.stringify(action.payload));
      return {
        ...state,
        category: action.payload
      }
    case HANDLE_SUBCATEGORY:
      localStorage.setItem('subCategory', JSON.stringify(action.payload));
      return {
        ...state,
        subCategory: action.payload
      }
    case HANDLE_PRICE:
      localStorage.setItem('price', JSON.stringify(action.payload));
      return {
        ...state,
        price: action.payload
      }

    case FETCH_CATEGORIES:
      return {
        ...state,
        categoryOptions: action.payload
      }

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoryOptions: action.payload
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state
      };

    case FETCH_SUBCATEGORIES:
      return {
        ...state,
        subCategoryOptions: action.payload
      }
    case FETCH_SUBCATEGORIES_SUCCESS:
      return {
        ...state,
        subCategoryOptions: action.payload
      };

    case FETCH_SUBCATEGORIES_FAILURE:
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
      category : '',
      subCategory : ''
    }
    case RECOVER_DATA_FROM_LOCAL_STORAGE:
    return {
      ...state,
      category: JSON.parse(localStorage.getItem('category')) || '',
      subCategory: JSON.parse(localStorage.getItem('subCategory')) || '',
      price: JSON.parse(localStorage.getItem('price')) || ''
    }
    default:
      return state;

  }
}

import {
  HANDLE_CATEGORY,
  HANDLE_SUBCATEGORY,
  HANDLE_PRICE,
  FETCH_SUBCATEGORIES,
  FETCH_CATEGORIES_INIT,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_SUBCATEGORIES_INIT,
  FETCH_SUBCATEGORIES_SUCCESS,
  FETCH_SUBCATEGORIES_FAILURE,
  HANDLE_STEP_TWO,
  RECOVER_DATA_FROM_LOCAL_STORAGE
} from './types';
import API from '../api-client/api';

export function handleCategory (category) {
  return {
    type: HANDLE_CATEGORY,
    payload: category
  }
}

export function handleSubCategory (subCategory) {
  return {
    type: HANDLE_SUBCATEGORY,
    payload: subCategory
  }
}

export function fetchCategories () {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_CATEGORIES_INIT
      };
    })

    try {
      const data = await API.categories.getAll();
      dispatch(fetchCategoriesSuccess(data));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  }
}

function fetchCategoriesSuccess (categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
}

function fetchCategoriesFailure (error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
}

function fetchSubCategoriesSuccess (subCategories) {
  return {
    type: FETCH_SUBCATEGORIES_SUCCESS,
    payload: subCategories
  };
}

function fetchSubCategoriesFailure (error) {
  return {
    type: FETCH_SUBCATEGORIES_FAILURE,
    payload: error
  };
}

export function fetchSubCategories (categoryId) {
  return async (dispatch) => {
    dispatch(() => {
      return {
        type: FETCH_SUBCATEGORIES_INIT
      };
    })

    try {
      const data = await API.subCategories.getSubCategories(categoryId);
      return dispatch(fetchSubCategoriesSuccess(data));
    } catch (error) {
      return dispatch(fetchSubCategoriesFailure(error));
    }
  };
}

export function handlePrice (price) {
  return {
    type: HANDLE_PRICE,
    payload: price
  }
}

export function handleStepTwo (options) {
  return {
    type: HANDLE_STEP_TWO,
    payload: options
  }
}

export function recoverDataFromLocalStorage () {
  return {
    type: RECOVER_DATA_FROM_LOCAL_STORAGE
  }
}

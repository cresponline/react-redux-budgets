import * as actions from '../actions/categoryActions';
import * as types from '../actions/types';

describe ('category actions', () => {

  it ('should create an action to handle the category', () => {
    const category = 'category';
    const expectedAction = {
      type: types.HANDLE_CATEGORY,
      payload: category
    }
    expect(actions.handleCategory(category)).toEqual(expectedAction);
  });

  it ('should create an action to handle the subCategory', () => {
    const subCategory = 'subCategory';
    const expectedAction = {
      type: types.HANDLE_SUBCATEGORY,
      payload: subCategory
    }
    expect(actions.handleSubCategory(subCategory)).toEqual(expectedAction);
  });

  it ('should create an action to handle the price', () => {
    const price = 'price';
    const expectedAction = {
      type: types.HANDLE_PRICE,
      payload: price
    }
    expect(actions.handlePrice(price)).toEqual(expectedAction);
  });

  it ('should create an action to handle the second step of the budget form', () => {
    const options = {};
    const expectedAction = {
      type: types.HANDLE_STEP_TWO,
      payload: options
    }
    expect(actions.handleStepTwo(options)).toEqual(expectedAction);
  });

  it ('should create an action to recover data from localStorage', () => {
    const expectedAction = {
      type: types.RECOVER_DATA_FROM_LOCAL_STORAGE
    }
    expect(actions.recoverDataFromLocalStorage()).toEqual(expectedAction);
  });
});

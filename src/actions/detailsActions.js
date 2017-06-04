import {
  CONFIRM_BUDGET,
  RECOVER_DATA_FROM_LOCAL_STORAGE
} from './types';

export function confirmBudget () {
  return {
    type : CONFIRM_BUDGET
  }
}

export function recoverDataFromLocalStorage () {
  return {
    type : RECOVER_DATA_FROM_LOCAL_STORAGE
  }
}

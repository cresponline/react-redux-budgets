import {
  HANDLE_DESCRIPTION,
  HANDLE_ESTIMATEDTIME,
  HANDLE_STEP_ONE,
  RECOVER_DATA_FROM_LOCAL_STORAGE
} from './types';

export function handleDescription (description) {
  return {
    type: HANDLE_DESCRIPTION,
    payload: description
  }
}

export function handleEstimatedTime (estimatedTime) {
  return {
    type: HANDLE_ESTIMATEDTIME,
    payload: estimatedTime
  }
}

export function handleStepOne (options) {
  return {
    type: HANDLE_STEP_ONE,
    payload: options
  }
}
export function recoverDataFromLocalStorage () {
  return {
    type: RECOVER_DATA_FROM_LOCAL_STORAGE
  }
}

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import budget from './budgetReducer';
import description from './descriptionReducer'
import category from './categoryReducer';
import contact from './contactReducer';
import details from './detailsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  budget,
  description,
  category,
  contact,
  details
});

export default rootReducer;

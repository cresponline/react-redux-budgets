import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import Budget from './components/Budget/Budget';
import Description from './components/Description/Description';
import Category from './components/Category/Category';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Budget} />
    <Route path="/description" component={Description} />
    <Route path="/category" component={Category} />
    <Route path="/contact" component={Contact} />
    <Route path="/details" component={Details} />
  </Route>
)

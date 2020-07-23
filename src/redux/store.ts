import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

import Reactotron from '../../reactotronConfig';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  // use if want to add some middleware
  // const {middleware} = require('some-package');
  // middlewares.push(middleware);
}

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(...middlewares),
    (Reactotron as any).createEnhancer(),
  );
  const store = createStore(reducer, enhancer);
  return {store};
}

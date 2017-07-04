import {
  combineReducers
} from 'redux-immutable';

import {
  createStore
} from 'redux';

import { List, Map, fromJS } from 'immutable';

const reducer = (state = Map({ count: 0 }), action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state.set('count', state.get('count') + 1);
    }
    
    return state;
};

const posts = (state = List([]), action) => {
  switch (action.type) {
    case '@@SET_POSTS':
      return fromJS(action.payload);
  }

  return state;
};

export default createStore(
  combineReducers({
    reducer,
    posts,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

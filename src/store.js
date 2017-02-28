import {
  combineReducers
} from 'redux-immutable';

import {
  createStore
} from 'redux';

import { Map } from 'immutable';

const reducer = (state = Map({ count: 0 }), action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state.set('count', state.get('count') + 1);
    }
    
    return state;
}

export default createStore(combineReducers({ reducer }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

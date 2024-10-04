// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import counterReducer from '../reducers/counterReducers';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;

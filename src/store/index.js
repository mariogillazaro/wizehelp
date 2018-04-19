import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import Reducer from '../reducers';

const Store = createStore(Reducer, applyMiddleware(thunk, logger));

export default Store;

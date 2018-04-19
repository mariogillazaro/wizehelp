import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import Reducer from '../reducers';

const Store = createStore(Reducer, applyMiddleware(thunk));

export default Store;

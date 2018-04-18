import {createStore} from 'redux';
import Reducer from '../reducers';

const initialState = {};

const Store = createStore(Reducer, initialState);

export default Store;

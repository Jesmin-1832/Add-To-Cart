import { createStore } from 'redux';
import { ProductReducer } from './Reducer/ProductReducer';

const store = createStore(ProductReducer);

export default store;
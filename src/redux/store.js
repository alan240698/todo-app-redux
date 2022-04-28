import {createStore} from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();
// Do không cần tham số initValue, nên tham số thứ 2 trong creatStore() là composedEnhancers
const store = createStore(rootReducer, composedEnhancers);

export default store;
import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import ReduxThunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

const customizedPromiseMiddleware = createPromise({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
});

const store = createStore(modules, applyMiddleware(ReduxThunk, customizedPromiseMiddleware));

export default store;
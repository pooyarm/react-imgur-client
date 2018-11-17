import {
    createStore,
	applyMiddleware
} from 'redux';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';

import rootReducer from './reducers/index';

let base_structure = {
    gallery: {
        loading: true,
        byId: {},
        allIds: []
    }
};

const enhancer = applyMiddleware(
    logger,
    promiseMiddleware
);

const store = createStore(
	rootReducer,
	base_structure,
    enhancer
);

export default store;
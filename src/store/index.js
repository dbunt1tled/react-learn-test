import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer/index';
import logger from "../middlewares/logger";
import uuid from "../middlewares/uuid";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger, uuid),
    // other store enhancers if any
);


const store = createStore(reducer, enhancer);
// for developer environment
window.store = store;

export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, composeEnhancers(
        applyMiddleware(sagaMiddleware),
    ));

    sagaMiddleware.run(rootSaga);
    return store;
}
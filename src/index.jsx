import React from 'react';
import './index.css';
import App from './App';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducers} from "./reducers/rootReducer";
import rootSaga from "./sagas/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)),
    );

sagaMiddleware.run(rootSaga);


const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
)
render(
    app,
    document.getElementById('root'),
);


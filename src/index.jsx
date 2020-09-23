import React from 'react';
import './index.css';
import App from './App';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducers} from "./reducers/rootReducer";


const store = createStore(rootReducers, composeWithDevTools());

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)
render(
    app,
    document.getElementById('root'),
);


// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

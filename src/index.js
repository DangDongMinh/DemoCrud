import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//store 
import { createStore } from 'redux'; 
import myReducer from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    myReducer, 
    composeWithDevTools()
);

ReactDOM.render(
        <Provider store = { store }>
            <App />
        </Provider>, 
        document.getElementById('root')
);
registerServiceWorker();

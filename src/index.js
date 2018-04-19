import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import videosReducer from './reducers/videosReducer';
import viewReducer from './reducers/viewReducer';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    combineReducers({
        videosData: videosReducer,
        viewData: viewReducer
    })
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();

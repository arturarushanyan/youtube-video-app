import { combineReducers } from 'redux';
import videosReducer from './videosReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
    videosData: videosReducer,
    viewData: viewReducer,
});

export default rootReducer;
import {combineReducers} from 'redux';
import galleryReducer from './gallery.js';

export default combineReducers({
    gallery: galleryReducer
});
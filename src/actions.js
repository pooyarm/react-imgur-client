import { createAction } from 'redux-actions';

import {
    ACTION_FETCH_GALLERY
} from './constants.js';
import { apiGallery } from './api.js';

export const fetchGallery = createAction(ACTION_FETCH_GALLERY, (section, sort, window) => {
    return apiGallery('hot','time','year');
});
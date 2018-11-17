import {
    ACTION_FETCH_GALLERY
} from '../constants';

const defaultGallery = {
    loading: true,
    byId: {},
    allIds: []
};

const galleryReducer = (db = defaultGallery, action) => {
    switch(action.type) {
        case ACTION_FETCH_GALLERY:
            var byId = {};
            for (var i of action.payload.data) {
                byId[i.id] = i;
            }
            return {
                loading: false,
                byId,
                allIds: action.payload.data.map((image) => image.id)
            };
        break;
    }

	return db;
};

export default galleryReducer;
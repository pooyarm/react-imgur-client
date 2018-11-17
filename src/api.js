import 'whatwg-fetch';
import {CLIENT_ID} from './constants';

const apiHeaders = () => {
    return {
        Authorization: `Client-ID ${CLIENT_ID}`
    }
}

export const apiGet = (url) => {
    return fetch(url, {
        headers: apiHeaders()
    }).then(function(response) {
        return response.json()
    });
};

export const apiGallery = (section, sort, window, showViral = true, page = 0) => {
    showViral = (showViral)?'true':'false';
    var url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}`;
    return apiGet(url);
}
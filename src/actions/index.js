import {SELECT_LIST_VIEW, SELECT_GRID_VIEW, CLOSE_MODAL, OPEN_MODAL, SEARCH_VIDEO, SELECT_VIDEO} from '../constants/action-types';

export const searchVideo = (videos) => {
    return {
        type: SEARCH_VIDEO,
        videos
    }
};

export const selectVideo = (video) => ({
    type: SELECT_VIDEO,
    video
});

export const selectListView = () => ({
    type: SELECT_LIST_VIEW
});

export const selectGridView = () => ({
    type: SELECT_GRID_VIEW
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

export const openModal = () => ({
    type: OPEN_MODAL
});
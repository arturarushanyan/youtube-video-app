//app actions

export const selectListView = () => ({
    type: 'SELECT_LIST_VIEW'
});

export const selectGridView = () => ({
    type: 'SELECT_GRID_VIEW'
});

export const closeModal = () => ({
    type: 'CLOSE_MODAL'
});

export const searchVideo = (videos) => ({
    type: 'SEARCH_VIDEO',
    videos
});

export const selectVideo = (video) => ({
    type: 'SELECT_VIDEO',
    video
});
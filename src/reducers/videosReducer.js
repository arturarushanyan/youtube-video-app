import {SELECT_VIDEO, SEARCH_VIDEO} from "../constants/action-types";

const videosReducerDefaultState = {
    videos: [],
    selectedVideo: null
};

export default (state = videosReducerDefaultState, action) => {
    switch (action.type) {
        case SELECT_VIDEO:
            return {
                ...state,
                selectedVideo: action.video
            };
        case SEARCH_VIDEO:
            return {
                ...state,
                videos: [
                    ...state.videos,
                    action.videos
                ]
            };
        default:
            return state;
    }
}
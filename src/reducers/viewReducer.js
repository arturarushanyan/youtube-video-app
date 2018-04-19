import {SELECT_LIST_VIEW, SELECT_GRID_VIEW, CLOSE_MODAL, OPEN_MODAL} from "../constants/action-types";

const viewReducerDefaultState = {
    modalIsOpen: false,
    layout: 'list-view'
};

export default (state = viewReducerDefaultState, action) => {
    switch (action.type) {
        case SELECT_LIST_VIEW:
            return {
                ...state,
                layout: 'list-view'
            };
        case SELECT_GRID_VIEW:
            return {
                ...state,
                layout: 'grid_view'
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalIsOpen: false
            };
        case OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: true
            };
        default:
            return state;
    }
}
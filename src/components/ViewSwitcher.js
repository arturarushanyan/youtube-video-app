import React from 'react';

export default (props) => {
    return (
        <div className="view-switcher">
            <button
                className={`btn btn-outline-dark view-switch-btn list ${props.currentLayout === 'list-view' ? 'active' : ''}`}
                onClick={props.onSwitchToListView}
            >
                List View
            </button>
            <button
                className={`btn btn-outline-dark view-switch-btn grid ${props.currentLayout === 'grid-view' ? 'active' : ''}`}
                onClick={props.onSwitchToGridView}
            >
                Grid View
            </button>
        </div>
    )
}
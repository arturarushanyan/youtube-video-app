import React from 'react';
import VideoListItem from './VideoListItem';

export default (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                video={video}
                key={video.etag}
                onVideoSelect={props.onVideoSelect}
            />
        )
    });

    return (
        <ul className="list-group col-md-8 col-sm-12">
            { videoItems }
        </ul>
    )
}
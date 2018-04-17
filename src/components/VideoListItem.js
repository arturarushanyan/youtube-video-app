import React from 'react';

export default ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    const uploader = video.snippet.channelTitle;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                    <div className="uploader">
                        Uploader: {uploader}
                    </div>
                </div>
            </div>
        </li>
    )
}
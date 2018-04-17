import React from 'react';

export default ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const { title, channelTitle } = video.snippet;

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
                        Uploader: {channelTitle}
                    </div>
                </div>
            </div>
        </li>
    )
}
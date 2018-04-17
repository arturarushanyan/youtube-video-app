import React from 'react';

export default ({video}) => {
    if(!video) {
        //showing loading string until videos are loading
        return <div>Loading...</div>
    }

    const videoID = video.id.videoId;
    const embedUrl = `https://youtube.com/embed/${videoID}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={embedUrl} />
            </div>
        </div>
    )
}
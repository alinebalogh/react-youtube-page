import React from 'react';

const VideoList =  (props) => {
    const video = props.videos;

    video.map((video) => {
        return <VideoListItem video={item}/>
    })
    return(
        <ul className="list__group">

        </ul>
    );
}

export default VideoList;
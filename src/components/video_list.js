import React from 'react';
import VideoListItem from './video_list_item';
const VideoList =  (props) => {
    const video = props.videos;

    const videoItem = video.map((video) => {
        return <VideoListItem video={video}/>
    })

    return(
        <ul className="list__group">
	    {videoItem} 
        </ul>
    );
}

export default VideoList;

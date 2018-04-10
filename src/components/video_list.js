import React from 'react';
import VideoListItem from './video_list_item';
const VideoList =  (props) => {
    const video = props.videos;
    console.log('HEY')
    const videoItem = video.map((video) => {
        return <VideoListItem video={video}/>
    })
	console.log(videoItem)
    return(
        <ul className="list__group">
	    {videoItem} 
        </ul>
    );
}

export default VideoList;

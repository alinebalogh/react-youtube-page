import React from 'react';
import VideoListItem from './video_list_item';

const VideoList =  (props) => {
    const video = props.videos;
    
    const videoItem = video.map((video) => {
        return <VideoListItem
	    	onVideoSelect={props.onVideoSelect} 
	    	key={video.etag} 
	    	video={video}/>
    });
	console.log("Im going to videoItem")
    return(
        <div className="list">
            <ul className="list__group">
            {videoItem} 
            </ul>
        </div>
    );
}

export default VideoList;

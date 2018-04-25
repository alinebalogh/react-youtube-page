import React from 'react';
import VideoListItem from './video_list_item';

const VideoList =  (props) => {
    const video = props.videos;
    const leftArrowSvg = '<use class="searchbar__icon" xlink:href="././assets/sprite/sprite.svg#left-arrow" />';
    const rightArrowSvg = '<use class="searchbar__icon" xlink:href="././assets/sprite/sprite.svg#right-arrow" />';

    const videoItem = video.map((video) => {
        return <VideoListItem
	    	onVideoSelect={props.onVideoSelect} 
	    	key={video.etag} 
	    	video={video}/>
    });
	console.log("Im going to videoItem")
    return(
        <section className="section-list">
            <span className="left-arrow">
                <svg dangerouslySetInnerHTML={{__html: leftArrowSvg }} /> 
            </span>
            <span className="right-arrow">
                <svg dangerouslySetInnerHTML={{__html: rightArrowSvg }} />
            </span>
            
            <div className="list">
                <ul className="list__group">
                {videoItem} 
                </ul>
            </div>
        </section>
        
    );
}

export default VideoList;

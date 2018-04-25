import React from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{
	
	console.log(video.snippet.thumbnails)
	const thumbnail =  video.snippet.thumbnails.medium.url;


	return( 	
	 	<div className="list__item" onClick={() => onVideoSelect(video)}>
			<li className="list__media">
				<div className="list__thumbnail-wrap">
					<img className="list__thumbnail-img" src={thumbnail} />
				</div>
				<div className="media__heading">{video.snippet.title}</div>
			</li>
		</div>
	);
};

export default VideoListItem;

import React from 'react';

const VideoListItem = ({video}) =>{
	

	const thumbnail =  video.snippet.thumbnails.default.url;


	return( 	
	 	<li className="list__item">
			<div className="media">
				<div className="media__thumbnail">
				<img className="thumbnail" src={thumbnail} />
				</div>
				<div className="media__heading">{video.snippet.title}</div>
			</div>
		</li>
	);
};

export default VideoListItem;

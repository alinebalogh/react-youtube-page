import React from 'react';

const VideoListItem = ({video, onVideoSelect}) =>{
	

	const thumbnail =  video.snippet.thumbnails.default.url;


	return( 	
	 	<li className="list__item" onClick={() => onVideoSelect(video)}>
			<div className="list__media">
				<div className="list__thumbnail-wrap">
					<img className="list__thumbnail-img" src={thumbnail} />
				</div>
				{/* <div className="media__heading">{video.snippet.title}</div> */}
			</div>
		</li>
	);
};

export default VideoListItem;

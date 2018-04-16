import React from 'react';

const VideoDetail = ({video}) => {
	if(!video){
		return <div>Loading....</div>;  
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return (
	<div className="video">
		<div className="video__media">
			<iframe className="video__iframe" src={url}></iframe>
		</div>
		<div className="video__detail">
			<div className="video__detail-title">{video.snippet.title}</div>
			<div className="video__detail-description">{video.snippet.description}</div>
		</div>
	</div>
	);
};
export default VideoDetail;

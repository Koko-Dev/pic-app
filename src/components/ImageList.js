import React from 'react';

const ImageList = (props) => {
	console.log(props.images);
	// todo: create an array of all image urls
	const searchImages = props.images.map(image => {
		// goal: Use id from props.images ==> App.js - response.data.results
		return <img key={image.id} src={image.urls.regular} />
	})

	return (
		<div>{searchImages}</div>
	)
}

export default ImageList;
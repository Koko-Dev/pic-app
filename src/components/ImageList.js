import React from 'react';

const ImageList = (props) => {
	console.log(props.images);
	// todo: create an array of all image urls
	const searchImages = props.images.map(image => {
		return <img src={image.urls.small} />
	})

	return (
		<div>{searchImages}</div>
	)
}

export default ImageList;
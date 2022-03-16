import React from 'react';

const ImageList = (props) => {
	// todo: create an array of all image urls
	const images = props.images.map(image => {
		return <img src={image.urls.regular} />
	})

	return (
		<div>{images}</div>
	)
}

export default ImageList;
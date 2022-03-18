import React from 'react';
import './ImageList.css';
import ImageCard from "./ImageCard";

const ImageList = (props) => {
	// todo: create an array of all image urls
	const searchImages = props.images.map((image) => {
		// goal: Use id from props.images ==> App.js - response.data.results
		return <ImageCard key={image.id} image={image} />
	})

	return (
		<div className="image-list">{searchImages}</div>
	)
}

export default ImageList;
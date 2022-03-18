import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
	// todo: create an array of all image urls
	const searchImages = props.images.map(({ description, id, urls }) => {
		// goal: Use id from props.images ==> App.js - response.data.results
		return <img alt={description} key={id} src={urls.regular} />
	})

	return (
		<div className="image-list">{searchImages}</div>
	)
}

export default ImageList;
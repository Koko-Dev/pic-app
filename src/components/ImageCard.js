import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
	}

	/*
	 note: To access the <img /> through the <img ref={this.imageRef},
		 we call on componentDidMount() which is only called after
		 the component is rendered.
	 goal: The goal is to reach into the DOM and figure out the
	   clientHeight of the image.
	 important: When componentDidMount() is called,
		 although <img /> has been rendered, the actual
		 image has not yet been downloaded, so we cannot
		 call for clientHeight here; it will be zero at this point. */
	componentDidMount() {
		this.imageRef.current.addEventListener('load', event => {
			console.log(this.imageRef.current.clientHeight);
		})
	}

	render() {

		const {description, urls} = this.props.image;
		return (
			<div>
				<img
					ref={this.imageRef}
					alt={description}
					src={urls.regular}/>
			</div>
		);
	}
}

export default ImageCard;
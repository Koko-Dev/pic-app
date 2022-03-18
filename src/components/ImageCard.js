import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
	}

	// note: To access the <img /> through the <img ref={this.imageRef},
	//  we call on componentDidMount() which is only called after
	//  the component is rendered.
	//  goal: The goal is to reach into the DOM and figure out the height of the image
	componentDidMount() {
		console.log(this.imageRef);
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
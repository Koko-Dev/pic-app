import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
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
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;

		// todo: set spans = height of each row / 150px set height plus 1
		// note: we add 1 to encompass rounding
		// note: Add Math.ceil() just to cap its value
		const spans = Math.ceil(height / 10 + 1);

		// todo: set spans on state
		// this.setState({ spans: spans });
		this.setState({ spans });

		console.log(spans);
	}

	render() {
		const {description, urls} = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img
					ref={this.imageRef}
					alt={description}
					src={urls.regular}/>
			</div>
		);
	}
}

export default ImageCard;
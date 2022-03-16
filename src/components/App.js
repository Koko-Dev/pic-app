import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = { images: [] };

onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: {query: term}
		})
		this.setState({ images: response.data.results });
	}

	render() {
		return (
			<div className="ui container">
				<h1>Hello from App.js</h1>
				<SearchBar onSubmit={this.onSearchSubmit} />

			{/*	todo: print out number of images*/}
				Found: {this.state.images.length} images
			</div>)
	}
}

export default App;
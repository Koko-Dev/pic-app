import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import Image from './ImageList';
import ImageList from "./ImageList";

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
				<ImageList images={this.state.images}/>
			</div>)
	}
}

export default App;
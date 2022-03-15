import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
	state = { images: [] };

	async onSearchSubmit(term) {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: {query: term},
			headers: {
				Authorization: 'Client-ID AhUc6NEUinXjgam1yrbjhrSG50ZS-yPXoWct0-HgAxs',
			}
		})

		console.log('this:  ', this);
		// this.setState({ images: response.data.results });

	}

	render() {
		return (
			<div className="ui container">
				<h1>Hello from App.js</h1>
				<SearchBar onSubmit={this.onSearchSubmit}/>
			{/*	todo: print out number of images*/}
				Found: {this.state.images.length} images
			</div>)
	}
}

export default App;
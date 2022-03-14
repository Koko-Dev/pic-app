import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {

	async onSearchSubmit(term) {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: {query: term},
			headers: {
				Authorization: 'Client-ID AhUc6NEUinXjgam1yrbjhrSG50ZS-yPXoWct0-HgAxs',
			}
		})

		console.log(response);
	}

	render() {
		return (
			<div className="ui container">
				<h1>Hello from App.js</h1>
				<SearchBar onFormSubmit={this.onSearchSubmit}/>
			</div>)
	}
}

export default App;
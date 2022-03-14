import React from 'react';
import SearchBar from "./SearchBar";

class App extends React.Component {

	onSearchSubmit(term) {
		console.log(term);
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
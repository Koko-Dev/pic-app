import React from 'react';
import SearchBar from "./SearchBar";

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<h1>Hello from App.js</h1>
				<SearchBar />
			</div>)
	}
}

export default App;
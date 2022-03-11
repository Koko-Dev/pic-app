import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {

	// todo: this method is called anytime there is an input change
	onInputChange(event) {
		console.log(event.target.value);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label htmlFor="search-bar">Image Search</label>
						<input type="text"
						       name="search-bar"
						       id="search-bar"
									 onChange={this.onInputChange}/>
					</div>
					{/* /.field */}
				</form>
			</div>
		)
	}
}

export default SearchBar;
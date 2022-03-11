import React from 'react';
import './SearchBar.css'



class SearchBar extends React.Component {
	state = {term: ''};

// important: An arrow function is necessary here because
//  this.state.term within onFormSubmit is not bound to
//  SearchBar 'this' when just using function method.
	// note: The arrow function will always ensure the value 'this'
	//  is always equal to instance of the SearchBar class.
	onFormSubmit = (event) => {

		event.preventDefault();
		console.log(this.state.term);
	}



	// todo: this method is called anytime there is an input change
	/*onInputChange(event) {
	 console.log(event.target.value);
	 }*/



	render() {
		return (
			<div className="ui segment">
				<form className="ui form"
							onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="search-bar">Image Search</label>
						<input type="text"
						       name="search-bar"
						       id="search-bar"
						       value={this.state.term}
						       onChange={(e) => this.setState({term: e.target.value})}/>
					</div>
					{/* /.field */}
				</form>
			</div>
		)
	}
}

export default SearchBar;
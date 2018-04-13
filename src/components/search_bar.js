import React,{Component} from 'react';


class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state ={term: '' };

	}
	render(){
		return (
			<div className="searchbar">
				<input 
				className="searchbar__input"
				value={this.state.term}
				onChange= {(event) => this.onInputChange(event.target.value)} />
			</div>
		)
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChanges(term);
	}
}

export default SearchBar;

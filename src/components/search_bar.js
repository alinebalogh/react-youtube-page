import React,{Component} from 'react';


class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state ={term: '' };

	}
	render(){
		const useTag = '<use class="searchbar__icon" xlink:href="././assets/sprite/sprite.svg#icon-search" />';
		return (
			<div className="searchbar">
				<div className="searchbar__wrap">
					<input 
					placeholder="Search"
					className="searchbar__input"
					value={this.state.term}
					onChange= {(event) => this.onInputChange(event.target.value)} />
					<span><svg dangerouslySetInnerHTML={{__html: useTag }} /></span>
				</div>
			</div>
		)
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChanges(term);
	}
}

export default SearchBar;

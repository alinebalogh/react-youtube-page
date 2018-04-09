import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDVbp8S55paujARuAx9hxJH8z3pROqr6kg';



// Create a new component. THis component should produce some HTML
class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "aurora australis"},(videos) => {
      this.setState({videos});
    });
  }
  render(){
    return <div>
      <SearchBar  />
      <VideoList videos = {this.state.videos} />
    </div>;
  }
}

// This componente render HTML to our page 

ReactDOM.render(<App />, document.querySelector('.container'));

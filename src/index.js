import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDVbp8S55paujARuAx9hxJH8z3pROqr6kg';

// Create a new component. THis component should produce some HTML
const App = () => {
  return <div>
    <SearchBar />
  </div>;
}

// This componente render HTML to our page 

ReactDOM.render(<App />, document.querySelector('.container'));

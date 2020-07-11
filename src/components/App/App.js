import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import './App.css';

function App() {

  constructor(props) {
    this.state.searchResults = [
      { id: '',
        name:  '',
        artist: '',
        album: ''
      }
    ]
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
  );
}



export default App;

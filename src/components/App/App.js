import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);

    this.state = {
      searchResults: [
        {
          id: '',
          name: '',
          artist: '',
          album: ''
        }
      ],

      playlistName: '',
      playlistTracks: [
        {
          id: '',
          name: '',
          artist: '',
          album: ''
        }
      ]
    };
  }

    addTrack(track) {
      if (this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
        return;
      }
      this.setState({ playlistTracks: [...this.playlistTracks, track] })
    };

    render() {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
              <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
        </div>
      );
    }
  };



  export default App;

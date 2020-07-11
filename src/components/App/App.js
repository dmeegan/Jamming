import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);

    this.state = {
      searchResults: [
        {
          id: 'id1',
          name: 'name1',
          artist: 'artist1',
          album: 'album1'
        },
        {
          id: 'id2',
          name: 'name2',
          artist: 'artist2',
          album: 'album2'
        },
        {
          id: 'id3',
          name: 'name3',
          artist: 'artist3',
          album: 'album3'
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

    removeTrack(track) {
      this.setState({ playlistTracks: this.playlistTracks.filter( playlistTrack => playlistTrack.id !== track.id)})
    }

    render() {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
              <Playlist onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
        </div>
      );
    }
  };



  export default App;

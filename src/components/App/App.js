import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import './App.css';
import Spotify from '../../Util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({
        searchResults: searchResults
      })
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackURIs = this.playlistTracks.map(track => { return track.uri });
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then( ({}) => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    });
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      return;
    }
    this.setState({ playlistTracks: [...this.playlistTracks, track] })
  };

  removeTrack(track) {
    this.setState({ playlistTracks: this.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id) })
  };

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
};



export default App;

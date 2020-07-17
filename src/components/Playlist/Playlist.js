import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value)
    }

    render() {
        return (
            <div className="Playlist">
                <input value={'New Playlist'} onChange={this.handleNameChange} />
                <TrackList isRemoval={true} onRemove={this.props.onRemove} playlistName={this.props.playlistName} tracks={this.props.playlistTracks} />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;
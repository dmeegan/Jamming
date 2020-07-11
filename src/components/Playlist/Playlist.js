import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input value={'New Playlist'} />
                {/* <TrackList isRemoval={true} onRemove={this.props.onRemove} playlistName={this.props.playlistName} playlistTracks={this.props.playlistTracks} /> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;
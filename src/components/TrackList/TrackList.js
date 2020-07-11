import React from 'react';
import Track from '../Track/Track.js';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.searchResults.map( track => 
                    <Track key={track.id} onAdd={this.props.onAdd} name={track.name} album={track.album} artist={track.artist}/>
                )
    }
            </div>
        )
    }
}

export default TrackList;
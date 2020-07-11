import React from 'react';
import Track from '../Track/Track.js';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {/* this.props.tracklist.map( track => {
                    <Track key={track.id} />
                }) */}
            </div>
        )
    }
}

export default TrackList;
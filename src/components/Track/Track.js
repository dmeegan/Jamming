import React from 'react';

class Track extends React.Component {

    renderAction(isRemoval) {
        return isRemoval ? '+' : '-'
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.artist} | {this.props.album}</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        )
    }
}

export default Track;
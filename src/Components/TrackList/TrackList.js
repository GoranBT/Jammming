import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{
  render(){
    console.log('tracklist', this.props);
    return(
      <div className="TrackList">
        { this.props.tracks && this.props.tracks.map((track, id) => {
          return (<Track
            track={track}
            key={id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
          />);
        }
        )}
      </div>
    );
  }
}

export default TrackList;

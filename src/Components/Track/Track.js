import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    return this.props.onRemove(this.track);
  }

  renderAction() {
    let isRemoval;
    if (isRemoval) {
      return <a className="track-action" onClick={this.removeTrack}> - </a>;
    } else {
      return <a className="track-action" onClick={this.addTrack}> + </a>;
    }
  }

  render(){
    console.log('track', this.props.track);
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;

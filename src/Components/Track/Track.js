import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.onAdd){
      return (<a className="Track-action" onClick={this.addTrack}>+</a>);
    } else {
      return (<a className="Track-action" onClick={this.removeTrack}>-</a>);
    }
  }

  songPreview() {
    if (!this.props.onAdd) {
      return (
        <div>
          <iframe
            title={this.props.track.name}
            src={`https://open.spotify.com/embed?uri=spotify:track:${this.props.track.id}`}
            frameBorder="0"
            allowTransparency="true"
            height="80"
          />
        </div>
      );
    } else {
      return (
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
      );
    }
  }

  render(){
    console.log('track', this.props.track);
    return (
      <div className="Track">
        {this.songPreview()}
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;

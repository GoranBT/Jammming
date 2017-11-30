import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';


class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }


  handleNameChange(e){
    console.log('input', e.target.value);
    this.props.onNameChange(e.target.value);
  }


  render(){
    console.log('playlist', this.props);
    return(
      <div className="Playlist">
        <input defaultValue={this.handleNameChange}
          onChange={this.handleNameChange}/>
        <TrackList
          playlistTracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
        />
        <a className="Playlist-save"
          onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;

import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{
        'name': 'Zaba',
        'artist': 'Goran',
        'album': 'Tralala'
      },{
        'name': 'zaba1',
        'artist': 'Dush',
        'album': 'Bar'
      },{
        'name': 'bar',
        'artist': 'nik',
        'album': 'foo'
      }],
      playlistName: 'Playlist Name',

      playlistTracks: [{
        name: 'Zaba',
        artist: 'Goran',
        album: 'Tralala'
      },{
        name: 'zaba1',
        artist: 'Dush',
        album: 'Bar'}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks;
    if (!tracks.includes(track)) {
      this.setState({playlistTracks: [...tracks, track]});
    }
  }

  search(search) {
    console.log(search);
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks;
    const newTracklist = tracks.filter(() => track.id !== tracks.id);
    this.setState({playlistTracks: newTracklist});
  }

  updatePlaylistName(name){
    this.setState({
      playlistName: name
    });
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

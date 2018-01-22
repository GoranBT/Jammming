const redirectUri = 'https://goranbt.github.io/Jammming/';
const clientId = '236783ceca29418dbec1e3181f7e431f';
let accessToken;

const Spotify = {

  getAccessToken(){
    if(accessToken){
      return accessToken;
    }

    const url = window.location.href;
    const urlAccessToken = url.match(/access_token=([^&]*)/);
    const urlExpiresIn = url.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      const expiresIn = urlExpiresIn[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const redirectUrl = 'https://accounts.spotify.com/authorize?client_id=' + clientId + '&response_type=token&scope=playlist-modify-public&redirect_uri=' + redirectUri;
      window.location = redirectUrl;
    }
  },

  search(term) {
    const searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + term;
    const accessToken = Spotify.getAccessToken();
    const authorization = {
      headers: {Authorization: `Bearer ${accessToken}`}
    };
    return fetch(searchUrl, authorization).then(response => {
      return response.json();
    }).then(json => {
      if (!json.tracks) {
        return [];
      }
      return json.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  }
  // async search(term) {
  //   const searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + term;
  //   const accessToken = Spotify.getAccessToken();
  //   const authorization = {
  //     headers: {Authorization: `Bearer ${accessToken}`}
  //   };
  //   try {
  //     const response = await fetch(searchUrl, authorization);
  //     if(response.ok){
  //       const jsonResponse = await response.json();
  //       if (!jsonResponse.tracks) {
  //         return [];
  //       }
  //       return jsonResponse.tracks.items.map(track => ({
  //         id: track.id,
  //         name: track.name,
  //         artist: track.artists[0].name,
  //         album: track.album.name,
  //         uri: track.uri
  //       }));
  //     } throw new Error('Request failed!');
  //   }catch(error) {
  //     console.log(error);
  //   }
  //
  //
  //
  // }
  ,
  savePlaylist(name, trackUris) {
    if (!name || !trackUris || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = {Authorization: `Bearer ${accessToken}`};
    let userId;

    const usernameUrl = 'https://api.spotify.com/v1/me';
    return fetch(usernameUrl, {headers: headers}).then(response => {
      return response.json();
    }).then(json => {
      userId = json.id;
      const playlistsUrl = 'https://api.spotify.com/v1/users/' + userId + '/playlists';
      return fetch(playlistsUrl, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => {
        return response.json();
      }).then(json => {
        const tracksUrl = 'https://api.spotify.com/v1/users/' + userId + '/playlists/' + json.id + '/tracks';
        return fetch(tracksUrl, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }
};



export default Spotify;

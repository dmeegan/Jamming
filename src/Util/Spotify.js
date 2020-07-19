const clientId = 'Removed_for_posting_on_public_repository';
const redirectURI = 'My_Jammming_App.surge.sh';
let userAccessToken = '';

const Spotify = {

    getAccessToken() {
        if (userAccessToken) {
            return userAccessToken
        } else {
            const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
            if (accessTokenMatch && expiresInMatch) {
                userAccessToken = accessTokenMatch[1];
                const expiresInTime = Number(expiresInMatch[1]);
                window.setTimeout(() => userAccessToken = '', expiresInTime * 1000);
                window.history.pushState('Access Token', null, '/');
                return userAccessToken;
            } else {
                const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
                window.location = accessURL;
            };
        };
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        ).then(searchResponse => {
            console.log(searchResponse)
            return searchResponse.json()
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artists: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    savePlaylist(playlistName, trackURIs) {
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` }
        let userId;
        if (!playlistName || !trackURIs) {
            return
        }
        return fetch('https://api.spotify.com/v1/me', { headers: headers }
        ).then(response => { 
            response.json() }
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
                {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ name: playlistName })
                }).then(jsonResponse => {
                    const playlistId = jsonResponse.id;
                    return fetch(`/v1/users/${userId}/playlists/${playlistId}/tracks`, 
                    { headers: headers,
                        method: 'POST',
                        body: JSON.stringify({uris: trackURIs})
                    }
                    )
                })
        });
    }

};

export default Spotify;

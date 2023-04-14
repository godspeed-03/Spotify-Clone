import React, { useEffect, useState } from "react";
import Login from "./component/Login";
import Player from "./component/Player";
import { getTokenFromUrl } from "./component/Spotify";
import { useDataLayerValue } from "./Utils/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
export default function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_User",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type : 'SET_Playlists',
        playlists
      })
    })
      spotify.getPlaylist("3AK7f72ggfIqdmKB1hccOt").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
    
  }
  }, []);

  console.log(user)

  return (
    <>{token || getTokenFromUrl().access_token ? <Player spotify={spotify} /> : <Login />}</>
  );
}

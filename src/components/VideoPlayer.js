import React, { useState, useEffect } from "react";
import AudioPlayer from "react-audio-player";
import axios from "axios";

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchSongs() {
      const response = await axios.get("https://downloadsongs-production.up.railway.app/getData");
      setSongs(response.data);
    }

    fetchSongs();
  }, []);

  return (
    <div>
      {songs.map((song) => (
        <div key={song._id}>
          <h2>{song.songTitle}</h2>
          <img src={song.songThumbnail} width="20%" height="20%" alt="songThumbnails"></img> <br></br>
          <AudioPlayer src={`data:audio/mpeg;base64,${song.songData}`} controls />
        </div>
      ))}
    </div>
  );
}

export default SongList;

import React, { useEffect, useState } from "react";
import VideoPlayer from "./components/VideoPlayer.js";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/getData")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div>
      <VideoPlayer videos={videos} />
    </div>
  );
};

export default App;

import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <div key={video.id.videoId}>
        <VideoItem videos={video} onSelect={onSelect} />
      </div>
    );
  });

  return (
        <div>
            <div className="ui relaxed divided list">{renderedList}</div>
        </div>
    );

};

export default VideoList;

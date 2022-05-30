import './VideoItem.css'
import React from 'react';


const VideoItem = ({videos, onSelect, }) => {
    return (
      <div onClick={() => onSelect(videos)} className="item video-item" key={videos.id.videoId}>
        <img
          className="ui image"
          src={videos.snippet.thumbnails.medium.url}
          alt={videos.snippet.description}
        />
        <div className="content">
          <div className="header"> {videos.snippet.title} </div>
        </div>
      </div>
    );
}

export default VideoItem;

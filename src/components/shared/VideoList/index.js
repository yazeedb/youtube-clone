import React from 'react';

export default ({ videos }) => (
  <div className="video-list">
    <p>{ videos.map((item) => item.snippet.title) }</p>
  </div>
);

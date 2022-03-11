import React from "react";
import PropTypes from "prop-types";
import "./Youtube.css";

const YoutubeEmbed = ({ id }) => (
  
  <div className="video-responsive">
      <p></p>
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
      
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

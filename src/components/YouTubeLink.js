import React from "react";
import PropTypes from "prop-types";

const YoutubeLink = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeLink.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeLink;
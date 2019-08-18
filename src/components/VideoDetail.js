import React from "react";

import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video)
    return (
      <div style={{ fontSize: "30px", padding: '15px', borderRadius: '10px', marginTop: '150px', backgroundColor: 'white' }}>
        Welcome to Felosa's YOUTUBE APP, feel free to search for any video you
        want
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography style={{ fontSize: "20px" }}>
          <b>
            {video.snippet.title} - {video.snippet.channelTitle}
          </b>
        </Typography>
        <Typography variant="subtitle1">
          <b>Author:</b> {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          <b>Description:</b> {video.snippet.description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;

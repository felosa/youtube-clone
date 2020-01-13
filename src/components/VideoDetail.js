import React from "react";

import { Paper, Typography, Grid } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video)
    return (
      <Grid
        spacing={0}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100px",
          fontSize: "30px",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "150px"
        }}
      >
        <p></p>
      </Grid>
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

import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({video, onVideoSelect}) => {
  return (
  <Grid item xs={12} style={{padding: '10px'}}>
    <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={()=> onVideoSelect(video)}>
      <img style={{marginRight: '20px', maxWidth: '200px', maxHeight: '90px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}></img>
      <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
    </Paper>
  </Grid>)
};

export default VideoItem;

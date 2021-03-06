import React from "react";

import VideoItem from "./VideoItem";

import { Grid } from "@material-ui/core";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, idx) => (
    <VideoItem onVideoSelect={onVideoSelect} key={idx} video={video} />
  ));
  return <Grid spacing={10}>{listOfVideos}</Grid>;
};

export default VideoList;

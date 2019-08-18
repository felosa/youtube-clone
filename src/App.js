import React from "react";
import { Grid } from "@material-ui/core";
import VideoDetail from "./components/VideoDetail";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

import youtube from "./api/youtube";

class App extends React.Component {
  state={
    videos: [],
    selectedVideo: null,
  }

  onVideoSelect=(video)=>{
    this.setState({selectedVideo: video})
  }

  handleSubmit=async (searchTerm)=>{
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDE6xsWmAfQnkW-izYnVkn0KjJuiNYhwf4",
        q: searchTerm,
      }
    });
    this.setState({videos:response.data.items, selectedVideo: response.data.items[0]})
  }
  render() {
    const {selectedVideo,videos}=this.state
    return (
      <div>
        <Grid justify="center" container spacing={10}>
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo}></VideoDetail>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}></VideoList>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Grid } from "@material-ui/core";
import VideoDetail from "./components/VideoDetail";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import logo from "./images/videoViewer.png";
import "./App.css";

import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDE6xsWmAfQnkW-izYnVkn0KjJuiNYhwf4",
        q: searchTerm
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div>
        <Grid justify="center" container>
          <Grid item xs={12}>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "150px",
                  paddingBottom: "30px"
                }}
              >
                <img style={{ height: "100px" }} src={logo} alt=""></img>
                <SearchBar onFormSubmit={this.handleSubmit} />
                <div></div>
              </Grid>
              <Grid
                item
                xs={8}
                style={{ paddingRight: "30px", paddingLeft: "150px" }}
              >
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4} style={{ paddingRight: "150px" }}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

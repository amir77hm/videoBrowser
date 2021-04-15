import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import Youtube from "./components/api/youtube";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import "./style.css";

export default class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = async term => {

    const res = await Youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState(prevState => {
      return { videos: res.data.items }
    })
  }

  onSelectedVideo = (video) => {
    this.setState(prevState => {
      return { selectedVideo: video }
    })
  }


  render() {
    return (
      <div className='App'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetails video={this.state.selectedVideo ? this.state.selectedVideo : ''} />
        <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo} />
      </div>
    )
  }
}
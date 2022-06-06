import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  componentDidMount() {
    this.onFormSubmit("Ibrahimovic");
  }
  state = { videos: [], selectedVideo: null };

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    // console.log(response);
  };

  onVideoSelect = (video) => {
    // console.log('THIS IS THE NEEDED ONE THE REST ARE JUST THERE FOIR FASHION', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmission={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
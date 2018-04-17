import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import {API_KEY} from "../config";
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import '../styles/bootstrap.min.css';
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.state = {
            videos: [],
            selectedVideo: null
        }
    }

    onVideoSelect(selectedVideo) {
        this.setState({ selectedVideo });
    }

    onVideoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    componentDidMount() {
        this.onVideoSearch('react');
    }

    render() {
        return (
            <div className="video-app">
              <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default App;

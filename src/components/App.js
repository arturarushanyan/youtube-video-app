import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Config from "../config";
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ViewSwitcher from './ViewSwitcher';
import Modal from 'react-modal';
import '../styles/bootstrap.min.css';
import '../styles/App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSwitchToListView = this.onSwitchToListView.bind(this);
        this.onSwitchToGridView = this.onSwitchToGridView.bind(this);
        this.state = {
            videos: [],
            selectedVideo: null,
            modalIsOpen: false,
            layout: 'list-view'
        }
    }

    //handler for selecting the video
    onVideoSelect(selectedVideo) {
        this.setState({
            selectedVideo,
            modalIsOpen: true
        });
    }

    //handler that making api call to youtube
    onVideoSearch(term) {
        YTSearch({key: Config.API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    //handler for closing the modal
    closeModal() {
        this.setState({ modalIsOpen: false});
    }

    //handler for switching to grid view
    onSwitchToGridView() {
        this.setState({layout: 'grid-view'})
    }

    //handler for switching to list view
    onSwitchToListView() {
        this.setState({layout: 'list-view'})
    }

    componentDidMount() {
        // calling videoSearch handler with empty string as an argument because of fetching some default videos for the app
        this.onVideoSearch('');
    }

    render() {
        return (
            <div className={`video-app ${this.state.layout}`}>
              <h3 className="app-heading">Youtube Search App with ReactJS</h3>
              <SearchBar onSearchTermChange={ term => this.onVideoSearch(term)}/>
                <ViewSwitcher
                    currentLayout={this.state.layout}
                    onSwitchToGridView={this.onSwitchToGridView}
                    onSwitchToListView={this.onSwitchToListView}
                />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={Config.customStyles}
                    contentLabel="Video Modal"
                >
                    <button className="btn btn-default float-right close-button" onClick={this.closeModal}>X</button>
                    <VideoDetail video={this.state.selectedVideo}/>
                </Modal>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default App;

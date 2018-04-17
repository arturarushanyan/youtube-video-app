import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import {API_KEY} from "../config";
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Modal from 'react-modal';
import '../styles/bootstrap.min.css';
import '../styles/App.css';


const customStyles = {
    content : {
        width                 : '90%',
        height                : '90%',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        zIndex                : '9999'
    }
};

class App extends Component {
    constructor(props){
        super(props);
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            videos: [],
            selectedVideo: null,
            modalIsOpen: false
        }
    }

    onVideoSelect(selectedVideo) {
        this.setState({
            selectedVideo,
            modalIsOpen: true
        });
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

    closeModal() {
        this.setState({ modalIsOpen: false});
    }

    componentDidMount() {
        this.onVideoSearch('');
    }

    render() {
        return (
            <div className="video-app">
              <h3 className="app-heading">Youtube Search App with ReactJS</h3>
              <SearchBar onSearchTermChange={ term => this.onVideoSearch(term)}/>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
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

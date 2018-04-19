import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YTSearch from 'youtube-api-search';
import Config from '../config'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ViewSwitcher from './ViewSwitcher';
import Modal from 'react-modal';
import '../styles/bootstrap.min.css';
import '../styles/App.css';
import { searchVideo } from '../actions';

class App extends Component {
    constructor(props){
        super(props);
        this.onVideoSearch = this.onVideoSearch.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSwitchToListView = this.onSwitchToListView.bind(this);
        this.onSwitchToGridView = this.onSwitchToGridView.bind(this);
        console.log('app props are', this.props)
    }

    componentDidMount() {
        YTSearch({key: Config.API_KEY, term: ''}, (videos) => {
            this.props.searchVideo(videos);
        })
        // calling videoSearch handler with empty string as an argument because of fetching some default videos for the app

    }
    componentWillReceiveProps(nextProps) {
        this.setState({selectedVideo: nextProps.videos[0] })
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
        YTSearch({
            key: Config.API_KEY,
            term
        }, (videos) => {
            this.props.searchVideo(videos);
        })
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

    render() {
        return (
            <div className={`video-app `}>
              <h3 className="app-heading">Youtube Search App with ReactJS</h3>
              <SearchBar onSearchTermChange={ term => this.onVideoSearch(term)}/>
                <ViewSwitcher
                    currentLayout={'list_view'}
                    onSwitchToGridView={this.onSwitchToGridView}
                    onSwitchToListView={this.onSwitchToListView}
                />
                <Modal
                    isOpen={false}
                    onRequestClose={this.closeModal}
                    style={Config.customStyles}
                    contentLabel="Video Modal"
                >
                    <button className="btn btn-default float-right close-button" onClick={this.closeModal}>X</button>
                    <VideoDetail video={null}/>
                </Modal>
                {/*<VideoList*/}
                    {/*videos={null}*/}
                    {/*onVideoSelect={this.onVideoSelect}*/}
                {/*/>*/}
            </div>
        );
    }
}

function mapStateToProps (state) {
    console.log(state);
    return {
        videos: state.videos
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ searchVideo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
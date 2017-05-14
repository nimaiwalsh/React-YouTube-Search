import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar.js';
import VideoList from './components/video-list.js';
import VideoDetail from './components/video-detail.js';
//YouTube API Key
const API_KEY = 'AIzaSyB6zBQPzTFsZamaIEZDNLTctIM-scIrBFM';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('surfboards');
    }
    
    videoSearch(term) {
        //Youtube API request using youtube-api-search module
        YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
            console.log(this.state.videos);
        });
    }
    
    render() {
        //Use lodash _.debounce to limit the function from running everytime a user types a new input into the search
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos} />
            </div>
        )
    }
};


//Take this component's generated  HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
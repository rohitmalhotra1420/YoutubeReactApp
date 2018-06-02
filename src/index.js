import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY='AIzaSyDAyYIU0uRJadfSwFyYvrEhv86RfTGuqnM';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        };
        this.videoSearch('reactjs');
    }



    videoSearch(term){
        YTSearch({key:API_KEY,term:term}, (video_data)=> {
        this.setState({
                videos:video_data,
                selectedVideo:video_data[0]

            })
        });
    }

    render(){
        const delayedSearch=_.debounce((term)=>{this.videoSearch(term)},300);
        return(
            <div>
                <SearchBar onsearch={delayedSearch} />
                <VideoDetail video= {this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(video)=>{this.setState({selectedVideo:video})
                    }}
                    videos={this.state.videos} />

            </div>

        );
    }
}


ReactDOM.render(<App />,document.getElementById('app'));
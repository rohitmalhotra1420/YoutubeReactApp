import React from 'react';

const VideoDetail=(props)=>{

    if(!props.video){
        return <div>loading...</div>
    }
    console.log(props.video);
    const videoId=props.video.id.videoId;
    const url='https://www.youtube.com/embed/'+videoId;

    return(
        <div className="col-md-8 current-container">
        <iframe src={url} className="current-video"></iframe>
            <div className="details">
                <h3>{props.video.snippet.title}</h3>
                <hr/>
                <h4>{props.video.snippet.channelTitle}</h4>
                <br/>
                <h5>{props.video.snippet.description}</h5>
            </div>
        </div>
    );
}

export default VideoDetail;
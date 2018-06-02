import React from 'react';


const VideoListItem=(props)=>{

    const SingleVideo=props.video;

    //console.log(SingleVideo);
    return (

      <div  className="row video-tile" onClick={()=>{props.onVideoSelect(props.video)}}>
          <div className="col-md-5"><img className="related-img-tile" src= {SingleVideo.snippet.thumbnails.medium.url} /></div>
          <div className="col-md-7"> {SingleVideo.snippet.title}</div>



      </div>

    );
}


export default VideoListItem;
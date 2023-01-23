import React from "react";
import "./YouTubeComp.css";
const YoutubeComp = (props) => {

  return (
     <div className="youtube-wrapper">
        <div className="img-thumb">
         <img src="/public/logo512.png" alt="" />
         <p className="time">{props.time}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
     </div>
    )
}
YoutubeComp.defaultProps= {

 time: '00.00',
 title: 'unknown',
 desc: 'isi sendiri'
}

export default YoutubeComp;
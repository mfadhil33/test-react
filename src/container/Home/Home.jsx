import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YouTubeComp";

class Home extends Component{

  render(){

    return (
         <div>
            <p>Youtube Component</p>
            <hr />
             <YoutubeComp time="7.12" title="Learn languange programing Rust" desc="...."/>
             <YoutubeComp time="2.12" title="learn JS basic" desc="hmmm"/>
             <YoutubeComp time="7.00"  title="Learn ReactJs" desc="no click bait" />
             <YoutubeComp />
         </div>
        )
}
}

export default Home;
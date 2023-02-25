import React, { Component } from "react";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import YoutubeComp from "../../component/YoutubeComp/YouTubeComp";
// import Product from "../Product/Product";

class Home extends Component{

  state = {
    showComponent: true
  }

  componentDidMount(){
   setTimeout(() => {
  
       this.setState({
         showComponent: false,
       });
  }, 15000);
  }

  render(){

    return (
         <div>
            {/* <p>Youtube Component</p>
            <hr />
             {/* <YoutubeComp time="7.12" title="Learn languange programing Rust" desc="...."/>
             <YoutubeComp time="2.12" title="learn JS basic" desc="hmmm"/>
             <YoutubeComp time="7.00"  title="Learn ReactJs" desc="no click bait" />
             <YoutubeComp /> */}

             <p>Life Cycle Component</p>

            <hr />
            {
             this.state.showComponent ?
            <LifeCycleComp />
            :  null
            }
             

         </div>
        )
}
}

export default Home;
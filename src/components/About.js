import React, { Component } from 'react'

import news from "../img/news.png";
import './NavBar.css';
export default class About extends Component {
  render() {
    return (
      <div>
        <div className='news'>News-Wave
      
        </div>
        <div className='newsApp'>
          <div className='font'>About us --</div>

Welcome to NewsWave, your go-to source for staying informed about the latest happenings around the world. Our mission is to empower individuals with timely and accurate news while providing a seamless and enjoyable news-reading experience. At NewsWave, we believe that access to reliable information is fundamental to a well-informed society. Our vision is to create a platform that not only delivers the news but also fosters critical thinking, global awareness, and open dialogue.</div>
      
            <div className="w-secCircle">
                <img src={news} alt="" />
            </div>
      </div>
    
    )
  }
}
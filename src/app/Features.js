import React from 'react'
import { Link } from 'react-router-dom'

function Features() {
  return (
    <div className="features">
    <h2 className="main-title">features</h2>
    <div className="container">
      <div className="box Quality">
        <div className="imag-holder">
          <img src="imagr/features-01.jpg" alt=""/>
        </div>
        <h2>Quality</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
        <Link to="#">More</Link>
      </div>
      <div className="box time">
        <div className="imag-holder">
          <img src="imagr/features-01.jpg" alt=""/>
        </div>
        <h2>Time</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
        <Link to="#">More</Link>
      </div>
      <div className="box passion">
        <div className="imag-holder">
          <img src="imagr/features-01.jpg" alt=""/>
        </div>
        <h2>passion</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
        <Link to="#">More</Link>
      </div>
    </div>
  </div>
  )
}

export default Features
import React from 'react'

function Landing() {
  return (
     <div className="landing">
    <div className="container">
      <div className="text">
        <h3>Welcome, To EL Bialy World</h3>
        <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and
          Events</p>
      </div>
      <div className="image">
        <img src="imagr/landing-image.png" alt=""/>
      </div>
    </div>
    <a href="#Articles" className="go-down">
      <i className="fa-solid fa-angles-down"></i>
    </a>
  </div>
  )
}

export default Landing
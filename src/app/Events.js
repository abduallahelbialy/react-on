import React from 'react'

function Events() {
  return (
    <div className="events" id="events">
    <div className="up"><img src="imagr/dots.png" alt=""/></div>
    <div className="ud"><img src="imagr/dots.png" alt=""/></div>
    <h2 className="main-title">LATEST EVENTS</h2>
    <div className="container">
      <img src="imagr/events.png" alt=""/>
      <div className="info">
        <div className="time">
          <div className="unit">
            <span>Days</span>
            <span className="days"></span>
          </div>
          <div className="unit">
            <span>Hours</span>
            <span className="hours"></span>
          </div>
          <div className="unit">
            <span>Minutes</span>
            <span className="minutes"></span>
          </div>
          <div className="unit">
            <span>Seconds</span>
            <span className="seconds"></span>
          </div>
        </div>
        <h2 className="u">Tech Masters Event 2024</h2>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto
          ut adipisci quam
          ratione aliquam excepturi nulla in harum, veritatis porro</p>
      </div>
    </div>
    <div className="subscribe">
      <form action="">
        <input type="email" placeholder="Enter Your Emaill"/>
        <input type="submit" value="subscribe"/>
      </form>
    </div>
    </div>
  )
}

export default Events
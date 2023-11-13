import React from 'react'

function Discount() {
  return (
     <div className="discount" id="discount">
    <div className="image">
      <div className="content">
        <h2>We Have A Discount </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae
          ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique laborum
          dicta aperiam odit doloribus corporis.</p>
        <img src="imagr/discount (1).png" alt=""/>
      </div>
    </div>
    <div className="form">
      <div className="content">
        <h2>Request A Discount</h2>
        <form action="">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <input type="number" placeholder="Your Phone"/>
          <textarea cols="30" rows="10" placeholder="Tell Us About Your Needs"></textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Discount
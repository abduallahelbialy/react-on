import React from 'react'
import { Link } from 'react-router-dom'

function Articles() {
  return (

   <div className="Articles" id="Articles">
    <h2 className="main-title">Articles</h2>
    <div className="container">
      <div className="box">
        <img src="imagr/cat-01.jpg" alt=""/>
        <div className="content">
          <h3> Test Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <Link to="/" className="Read more">Read more</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
        <img src="imagr/cat-02.jpg" alt=""/>
        <div className="content">
          <h3> Test Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <Link to="/" className="Read more">Read more</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
        <img src="imagr/cat-03.jpg" alt=""/>
        <div className="content">
          <h3> Test Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <Link to="/" className="Read more">Read more</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
        <img src="imagr/cat-04.jpg" alt=""/>
        <div className="content">
          <h3> Test Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <Link to="/" className="Read more">Read more</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
        <img src="imagr/cat-05.jpg" alt=""/>
        <div className="content">
          <h3> Test Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <Link to="/" className="Read more">Read more</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
        <img src="imagr/cat-06.jpg" alt=""/>
        <div className="content">
          <h3> Test Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <Link to="/" className="Read more">Read more</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
        <img src="imagr/cat-07.jpg" alt=""/>
        <div className="content">
          <h3> Test Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <Link to="/"className="Read more">Read more</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="box">
        <img src="imagr/cat-08.jpg" alt=""/>
        <div className="content">
          <h3> Test Title </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
        </div>
        <div className="info">
          <Link to="/" href="#" className="Read more">Read more</Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default Articles
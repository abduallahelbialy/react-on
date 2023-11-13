import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  return (
   <div className="pricing" id="pricing">
    <div className="up"><img src="imagr/dots.png" alt=""/></div>
    <div className="ud"><img src="imagr/dots.png" alt=""/></div>
    <h2 className="main-title">PRICING PLANS</h2>
    <div className="container">
      <div className="box">
        <h3 className="title">Basic</h3>
        <img src="imagr/hosting-basic.png" alt=""/>
        <div className="pric">
          <span className="pr">$15</span>
          <span className="time">Per Month </span>
        </div>
        <ul>
          <li>10GB HDD Space </li>
          <li>5 Email Addresses</li>
          <li>2 Subdomains</li>
          <li>4 Databases</li>
          <li>Basic Support</li>
        </ul>
        <Link to="#">Choose Plan</Link>
      </div>
      <div className="box Popular">
        <div className="label">Most Popular</div>
        <h3 className="title">Advanced </h3>
        <img src="imagr/hosting-advanced.png" alt=""/>
        <div className="pric">
          <span className="pr">$25</span>
          <span className="time">Per Month </span>
        </div>
        <ul>
          <li>20GB HDD Space </li>
          <li>10 Email Addresses </li>
          <li>5 Subdomains </li>
          <li>8 Databases </li>
          <li>Advanced Support </li>
        </ul>
        <Link to="#">Choose Plan</Link>
      </div>
      <div className="box">
        <h3 className="title">Professional</h3>
        <img src="imagr/hosting-professional.png" alt=""/>
        <div className="pric">
          <span className="pr">$45</span>
          <span className="time">Per Month </span>
        </div>
        <ul>
          <li>50GB HDD Space </li>
          <li>20 Email Addresses</li>
          <li>10 Subdomains</li>
          <li>20 Databases</li>
          <li>Professional </li>
        </ul>
        <Link to="#">Choose Plan</Link>
      </div>
    </div>
  </div>
  )
}

export default Pricing
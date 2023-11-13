import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
    <div className="container">
      <div className="box">
        <h3>EL Bialy</h3>
        <ul className="social">
          <li>
            <Link to="https://www.facebook.com/profile.php?id=100007727587344"className="facebook" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="twitter">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="youtube">
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
        </ul>
        <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste
          aspernatur</p>

      </div>
      <div className="box">
        <ul className="links">
          <li><Link to="#">Important Link 1</Link></li>
          <li><Link to="#">Important Link 2</Link></li>
          <li><Link to="#">Important Link 3</Link></li>
          <li><Link to="#">Important Link 4</Link></li>
          <li><Link to="#">Important Link 5</Link></li>
        </ul>
      </div>
      <div className="box">
        <div className="line">
          <i className="fas fa-map-marker-alt fa-fw"></i>
          <div className="info">Egypt, mansoura </div>
        </div>
        <div className="line">
          <i className="far fa-clock fa-fw"></i>
          <div className="info">Business Hours: From 10:00 To 18:00 </div>
        </div>
        <div className="line">
          <i className="fas fa-phone-volume fa-fw"></i>
          <div className="info">
            <span>+201028924906</span>
          </div>
        </div>
      </div>
      <div className="box footer-gallery">
        <img src="imagr/gallery-01.png" alt=""/>
        <img src="imagr/gallery-02.png" alt=""/>
        <img src="imagr/gallery-03.jpg" alt=""/>
        <img src="imagr/gallery-04.png" alt=""/>
        <img src="imagr/gallery-05.jpg" alt=""/>
        <img src="imagr/gallery-06.png" alt=""/>
      </div>
    </div>
    <p className="copyright">Made with &lt;3 by EL bialy</p>
    <script src="main.js"></script>
  </div>
  )
}

export default Footer
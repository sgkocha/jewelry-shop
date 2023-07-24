import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="d-f jc-sb align-center">
        <nav>
          <ul className="footer-nav-list d-f">
            <li><a href="">About company</a></li>
            <li><a href="">Partners</a></li>
            <li><a href="">Addresses</a></li>
            <li><a href="">News</a></li>
          </ul>
        </nav>
        <div className="footer-location">New York</div>
        <div className="footer-phone">+1 (844) 722-87-00</div>
      </div>
      <div className="d-f jc-sb" style={{marginTop: "80px"}}>
        <div className="footer-rights">&copy;Sanis copyright</div>
        <div className="footer-social d-f">
          <div><img src="images/social1.png" alt="social1"/></div>
          <div><img src="images/social2.png" alt="social2"/></div>
          <div><img src="images/social3.png" alt="social3"/></div>
        </div>
        <div className="footer-email">jewelry@gmail.com</div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <div className="header-bar d-f jc-sb align-center">
            <div className="header-location">New Jersey</div>
            <nav>
                <ul className="header-nav-list d-f">
                    <li><Link to="/">About company</Link></li>
                    <li><Link to="catalog">Catalog</Link></li>
                    <li><a href="">Addresses</a></li>
                    <li><a href="">News</a></li>
                </ul>
            </nav>
            <div className="header-info">WHOLESALE jewelry ONLINE SHOP</div>
            <div className="header-phone">+1 (844) 722-87-00</div>
        </div>
        <div className="header-logo"><img src="images/logo.png" alt="logo" /></div>
        <ul className="header-categories d-f jc-sb">
            <li>Earrings</li>
            <li>Rings</li>
            <li>Bracelets</li>
            <li>Pendants</li>
            <li>Necklace</li>
            <li>Piercing</li>
            <li>Brooches</li>
            <li>Cufflinks</li>
            <li>wood products</li>
            <li>religious</li>
            <li>gifts</li>
            <li>collections</li>
            <li>others</li>
        </ul>
    </header>
  )
}

export default Header
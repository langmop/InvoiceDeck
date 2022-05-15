import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const NavBar = () => {

  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

    if(!user) return null

    return (
        <div >
           <nav className="navbar" style={{
             backgroundColor:"#20272E"
           }}>
  <ul className="navbar-nav">
    <li className="logo">
      <a href="/dashboard" className="nav-link">
        <span className="link-text logo-text"><img style={{width: '200px',height:'200px'}} src="https://cdn.discordapp.com/attachments/902222411368370219/957661201502990447/Invoice_Deck-logos_white.png" alt="arc-invoice" /></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </li>
    <li className="nav-item">
      <Link to="/dashboard" className="nav-link">
      <img src="https://img.icons8.com/ios-glyphs/30/ffffff/dashboard.png"/> <span className="link-text">Dashboard</span>
      </Link>
    </li>
    
    <li className="nav-item">
      <a href="/invoice" className="nav-link">
     <img src="https://img.icons8.com/ios-glyphs/30/ffffff/add--v1.png"/> <span className="link-text">Create</span>
      </a>
    </li>
    <li className="nav-item">
      <a href="/invoices" className="nav-link">
      <img src="https://img.icons8.com/ios-glyphs/30/ffffff/invoice.png"/>
      <span className="link-text">Invoices</span>
      </a>
    </li>
    <li className="nav-item">
      <a href="/customers" className="nav-link">
      <img src="https://img.icons8.com/material-rounded/24/ffffff/gender-neutral-user.png"/>
       <span className="link-text">Customers</span>
      </a>
    </li>
    {/* <li className="nav-item">
      <a href="#" className="nav-link">
        <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="space-shuttle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x">
          <g className="fa-group">
            <path fill="currentColor" d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z" className="fa-secondary" />
            <path fill="currentColor" d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z" className="fa-primary" />
          </g>
        </svg>
        <span className="link-text">Shuttle</span>
      </a>
    </li> */}
    <li className="nav-item" id="themeButton">
      <a href="/settings" className="nav-link">
     <img src="https://img.icons8.com/external-justicon-lineal-justicon/30/ffffff/external-setting-notifications-justicon-lineal-justicon.png"/><span className="link-text">Settings</span>
      </a>
    </li>
  </ul>
</nav>
 
        </div>
    )
}

export default NavBar

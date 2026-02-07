import React from 'react'

export default function Navigation() {
  const handleNavigation = (href) => {
    window.location.href = href
  }

  return (
    <nav>
      <div className="container">
        <a className="brand" onClick={() => handleNavigation('/')}>
          MarketFlow
        </a>
        <ul>
          <li><a onClick={() => handleNavigation('/')}>Home</a></li>
          <li><a onClick={() => handleNavigation('/about.html')}>About</a></li>
          <li><a onClick={() => handleNavigation('/services.html')}>Services</a></li>
          <li><a onClick={() => handleNavigation('/checkout.html')}>Checkout</a></li>
        </ul>
      </div>
    </nav>
  )
}

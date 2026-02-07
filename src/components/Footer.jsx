import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(90deg,#667eea,#764ba2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>MF</div>
            <div>
              <h4 style={{ margin: 0, color: '#fff' }}>MarketFlow</h4>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>Marketing automation that delivers.</p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h5>Product</h5>
          <ul>
            <li><a href="/services.html">Services</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/checkout.html">Checkout</a></li>
          </ul>
        </div>

        <div className="footer-resources">
          <h5>Resources</h5>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Case studies</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h5>Stay updated</h5>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '0.6rem' }}>Subscribe to our newsletter for product updates and tips.</p>
          <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
            <input aria-label="email" placeholder="Your email" type="email" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
          <div className="socials" style={{ marginTop: '0.8rem' }}>
            <a href="#" aria-label="twitter">🐦</a>
            <a href="#" aria-label="linkedin">🔗</a>
            <a href="#" aria-label="github">💻</a>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0 }}>© 2026 MarketFlow. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

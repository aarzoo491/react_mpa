import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Home() {
  const handleNavigation = (href) => {
    window.location.href = href
  }

  return (
    <div className="site">
      <Navigation />
      
      <section className="hero">
        <div className="container">
          <h1>Transform Your Marketing with MarketFlow</h1>
          <p>Automate your campaigns, engage your audience, and boost conversions with our powerful marketing platform</p>
          <div style={{ marginTop: '2rem' }}>
            <button className="btn btn-primary" onClick={() => handleNavigation('/checkout.html')} style={{ marginRight: '1rem' }}>
              Start Free Trial
            </button>
            <button className="btn btn-outline" onClick={() => handleNavigation('/services.html')}>
              Explore Services
            </button>
          </div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop" alt="Marketing Dashboard" className="hero-image" />
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose MarketFlow?</h2>
          
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <div className="feature-content">
              <h3>Lightning Fast</h3>
              <p>Experience blazing-fast campaign creation and deployment. Our optimized platform handles millions of emails per second without breaking a sweat.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-content">
              <h3>Advanced Targeting</h3>
              <p>Segment your audience with precision using our AI-powered targeting engine. Reach the right person, with the right message, at the right time.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <div className="feature-content">
              <h3>Real-time Analytics</h3>
              <p>Get instant insights into campaign performance with comprehensive dashboards, detailed reports, and actionable metrics.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <div className="feature-content">
              <h3>Enterprise Security</h3>
              <p>Your data is protected with industry-leading encryption, regular security audits, and GDPR compliance. Sleep soundly knowing your information is safe.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🤖</div>
            <div className="feature-content">
              <h3>AI-Powered Automation</h3>
              <p>Let intelligent automation handle repetitive tasks. Our AI learns from your campaigns to optimize send times, content, and subject lines automatically.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🌍</div>
            <div className="feature-content">
              <h3>Global Infrastructure</h3>
              <p>With servers across 6 continents, MarketFlow ensures your campaigns reach customers worldwide with minimal latency and maximum deliverability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Join 10,000+ Businesses Using MarketFlow</h2>
          <p>Start automating your marketing today and see results in days, not months</p>
          <button className="btn btn-primary" onClick={() => handleNavigation('/checkout.html')}>
            Get Started Now
          </button>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Success Stories</h2>
          
          <div className="grid">
            <div className="card">
              <h3>TechStartup Inc</h3>
              <p><strong>Challenge:</strong> Struggling to scale email campaigns without hiring additional staff.</p>
              <p><strong>Result:</strong> Achieved 340% ROI increase and reduced campaign creation time from 2 hours to 15 minutes.</p>
              <p style={{ marginTop: '1rem', color: '#667eea', fontWeight: 'bold' }}>— Sarah Chen, Marketing Director</p>
            </div>

            <div className="card">
              <h3>E-commerce Pro</h3>
              <p><strong>Challenge:</strong> Low open rates and inability to segment customers effectively.</p>
              <p><strong>Result:</strong> Increased email open rates from 18% to 42% using AI-powered targeting and personalization.</p>
              <p style={{ marginTop: '1rem', color: '#667eea', fontWeight: 'bold' }}>— Marcus Johnson, CEO</p>
            </div>

            <div className="card">
              <h3>SaaS Solutions</h3>
              <p><strong>Challenge:</strong> Need for sophisticated automation workflows to nurture leads.</p>
              <p><strong>Result:</strong> 156% increase in lead conversion rates with automated nurture sequences.</p>
              <p style={{ marginTop: '1rem', color: '#667eea', fontWeight: 'bold' }}>— Elena Rodriguez, Head of Growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What Our Customers Say</h2>
          
          <div className="testimonial">
            <p><em>"MarketFlow has completely transformed how we approach marketing. The automation features alone have saved us hundreds of hours per month. Highly recommended!"</em></p>
            <div className="testimonial-author">— Alex Williams, Founder of Digital Agency Co.</div>
          </div>

          <div className="testimonial">
            <p><em>"The customer support team is exceptional. They helped us set up complex workflows and were always available when we needed them. Outstanding service!"</em></p>
            <div className="testimonial-author">— Jessica Lee, Marketing Manager at RetailHub</div>
          </div>

          <div className="testimonial">
            <p><em>"We switched from a competitor, and I wish we had done it sooner. Better features, better pricing, and an interface that actually makes sense. 10/10!"</em></p>
            <div className="testimonial-author">— David Martinez, Owner of Creative Ventures</div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Pricing Plans</h2>
          <div className="grid">
            <div className="card">
              <h3>Starter</h3>
              <p style={{ fontSize: '1.6rem', color: '#667eea', fontWeight: '700' }}>$49 / month</p>
              <p>Great for freelancers and small teams starting with email marketing.</p>
              <button className="btn btn-secondary" onClick={() => handleNavigation('/checkout.html')}>Choose Starter</button>
            </div>
            <div className="card">
              <h3>Professional</h3>
              <p style={{ fontSize: '1.6rem', color: '#667eea', fontWeight: '700' }}>$149 / month</p>
              <p>Best for growing teams that need advanced automation and analytics.</p>
              <button className="btn btn-primary" onClick={() => handleNavigation('/checkout.html')}>Choose Professional</button>
            </div>
            <div className="card">
              <h3>Enterprise</h3>
              <p style={{ fontSize: '1.6rem', color: '#667eea', fontWeight: '700' }}>Custom</p>
              <p>Custom solutions for large organizations and high-volume senders.</p>
              <button className="btn btn-secondary" onClick={() => handleNavigation('/checkout.html')}>Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <div className="grid">
            <div className="card">
              <h3>How quickly can I get started?</h3>
              <p>Sign up and launch your first campaign in under 30 minutes using our templates and onboarding guides.</p>
            </div>
            <div className="card">
              <h3>Do you offer a free trial?</h3>
              <p>Yes — start with a 14-day free trial with access to most core features.</p>
            </div>
            <div className="card">
              <h3>Is my data secure?</h3>
              <p>We use industry-standard encryption and follow strict security procedures including SOC2 practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Resources & Insights</h2>
          <div className="grid">
            <div className="card">
              <h3>Blog: Growth Strategies</h3>
              <p>Latest articles on email marketing, conversion optimization, and growth hacks from our team of experts.</p>
            </div>
            <div className="card">
              <h3>Guides & Templates</h3>
              <p>Downloadable templates and step-by-step guides to accelerate your campaign setup.</p>
            </div>
            <div className="card">
              <h3>Case Studies</h3>
              <p>Read in-depth case studies showing how customers achieved measurable results with MarketFlow.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

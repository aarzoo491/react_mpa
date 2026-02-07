import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Services() {
  const handleNavigation = (href) => {
    window.location.href = href
  }

  const services = [
    {
      id: 1,
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'Create, schedule, and automate email campaigns with advanced segmentation, A/B testing, and delivery optimization. Our platform ensures your messages reach the inbox every time.'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Advanced Customer Segmentation',
      description: 'Segment your audience based on behavior, demographics, engagement level, and more. Build highly targeted campaigns that speak directly to each customer segment.'
    },
    {
      id: 3,
      icon: '📱',
      title: 'SMS & Push Notifications',
      description: 'Reach customers across channels with SMS marketing and mobile push notifications. Coordinate multi-channel campaigns for maximum impact and engagement.'
    },
    {
      id: 4,
      icon: '🤖',
      title: 'AI-Powered Content Generation',
      description: 'Let our AI craft compelling email subject lines, body copy, and call-to-action buttons. Improve engagement and conversion rates with data-driven content suggestions.'
    },
    {
      id: 5,
      icon: '📊',
      title: 'Comprehensive Analytics & Reporting',
      description: 'Gain deep insights into campaign performance with real-time dashboards, cohort analysis, and custom reports. Track every metric that matters to your business.'
    },
    {
      id: 6,
      icon: '🔗',
      title: 'Integration & APIs',
      description: 'Seamlessly integrate with your existing tech stack. Connect with CRMs, e-commerce platforms, analytics tools, and more through our extensive API and pre-built integrations.'
    }
  ]

  return (
    <div className="site">
      <Navigation />
      
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Everything you need to automate, scale, and optimize your marketing</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Comprehensive Marketing Solutions</h2>
          
          <div className="grid">
            {services.map((service) => (
              <div key={service.id} className="card">
                <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="btn btn-secondary" onClick={() => handleNavigation('/checkout.html')}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What's Included in Every Plan</h2>
          
          <div className="grid">
            <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>✓ Core Features</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0' }}>✓ Email campaign builder</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Basic segmentation</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Standard analytics</li>
                <li style={{ padding: '0.5rem 0' }}>✓ 24/7 email support</li>
                <li style={{ padding: '0.5rem 0' }}>✓ API access</li>
              </ul>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>✓ Advanced Features</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0' }}>✓ Behavioral triggers</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Advanced segmentation</li>
                <li style={{ padding: '0.5rem 0' }}>✓ A/B testing</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Priority support</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Custom integrations</li>
              </ul>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>✓ Enterprise Features</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0' }}>✓ AI content generation</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Predictive analytics</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Dedicated account manager</li>
                <li style={{ padding: '0.5rem 0' }}>✓ White-label option</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Custom SLA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Customers Love MarketFlow</h2>
          
          <div className="grid">
            <div className="card">
              <h3>Ease of Use</h3>
              <p>Intuitive interface that requires no technical knowledge. Get started in minutes, not weeks. Drag-and-drop builders and pre-built templates accelerate your workflow.</p>
            </div>

            <div className="card">
              <h3>Reliability</h3>
              <p>99.99% uptime SLA ensures your campaigns always go out on time. Enterprise-grade infrastructure handles billions of messages with zero hiccups.</p>
            </div>

            <div className="card">
              <h3>Performance</h3>
              <p>Average email open rates improve by 40% in the first month. Our customers see average ROI of 4.2x compared to traditional email providers.</p>
            </div>

            <div className="card">
              <h3>Security</h3>
              <p>SOC 2 Type II certified. GDPR and CCPA compliant. Your data is encrypted at rest and in transit with industry-leading security protocols.</p>
            </div>

            <div className="card">
              <h3>Support</h3>
              <p>Expert support team available 24/7. Average response time under 2 minutes. Dedicated account managers for enterprise customers.</p>
            </div>

            <div className="card">
              <h3>Innovation</h3>
              <p>Regular feature updates and improvements. AI capabilities constantly evolving. Access to beta features before public launch for enterprise users.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Choose the plan that fits your needs and start automating today</p>
          <button className="btn btn-primary" onClick={() => handleNavigation('/checkout.html')}>
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

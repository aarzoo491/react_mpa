import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function About() {
  const handleNavigation = (href) => {
    window.location.href = href
  }
  return (
    <div className="site">
      <Navigation />
      
      <section className="hero">
        <div className="container">
          <h1>About MarketFlow</h1>
          <p>Empowering businesses worldwide with intelligent marketing automation</p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Mission</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            At MarketFlow, our mission is to democratize marketing automation. We believe that every business, regardless of size, should have access to enterprise-level marketing tools. We're committed to helping brands connect with their customers in meaningful ways through intelligent, data-driven automation that respects privacy and delivers results.
          </p>
        </div>
      </section>

      <section style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Vision</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            We envision a world where marketing is fully integrated with artificial intelligence, making it intuitive, efficient, and genuinely customer-centric. By 2030, we aim to be the leading marketing automation platform trusted by over 100,000 businesses across all industries and geographies.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Story</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <h4>2020 - The Beginning</h4>
              <p>MarketFlow was founded by a group of marketing professionals who were frustrated with existing solutions. They set out to build something better, simpler, and more powerful.</p>
            </div>

            <div className="timeline-item">
              <h4>2021 - Public Launch</h4>
              <p>We launched MarketFlow to the public with a focus on ease of use and powerful automation. Our first 500 customers immediately saw a 2x improvement in campaign ROI.</p>
            </div>

            <div className="timeline-item">
              <h4>2022 - Series A Funding</h4>
              <p>Raised $12M in Series A funding from leading venture capital firms, allowing us to expand our team and accelerate product development with advanced AI capabilities.</p>
            </div>

            <div className="timeline-item">
              <h4>2023 - Global Expansion</h4>
              <p>Launched MarketFlow in 15 new countries and introduced support for 25 languages, making marketing automation truly global.</p>
            </div>

            <div className="timeline-item">
              <h4>2024 - AI Revolution</h4>
              <p>Introduced AI-powered content generation, predictive analytics, and autonomous campaign optimization, setting new industry standards.</p>
            </div>

            <div className="timeline-item">
              <h4>2025 - 10,000+ Customers</h4>
              <p>Reached the milestone of 10,000+ active customers and processing over 5 billion messages monthly. Continued innovation in AI and machine learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet Our Leadership Team</h2>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">👨‍💼</div>
              <h4>Michael Foster</h4>
              <p>Founder & CEO</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Former VP of Marketing at TechGiant Corp. 15+ years of experience in digital marketing and SaaS.</p>
            </div>

            <div className="team-member">
              <div className="team-member-image">👩‍💻</div>
              <h4>Dr. Sophia Chen</h4>
              <p>Chief Technology Officer</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>PhD in Machine Learning from Stanford. Led AI initiatives at leading tech companies.</p>
            </div>

            <div className="team-member">
              <div className="team-member-image">👨‍💼</div>
              <h4>James Richardson</h4>
              <p>Chief Financial Officer</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Former CFO at multiple unicorns. Expert in scaling SaaS businesses profitably.</p>
            </div>

            <div className="team-member">
              <div className="team-member-image">👩‍🔬</div>
              <h4>Emma Gonzalez</h4>
              <p>VP of Product</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Product leader who scaled products from 0 to millions of users. Passionate about user-centered design.</p>
            </div>

            <div className="team-member">
              <div className="team-member-image">👨‍🎓</div>
              <h4>David Kumar</h4>
              <p>VP of Engineering</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Built and scaled engineering teams at Fortune 500 companies. Expert in distributed systems.</p>
            </div>

            <div className="team-member">
              <div className="team-member-image">👩‍💼</div>
              <h4>Rachel Thompson</h4>
              <p>VP of Customer Success</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Customer success expert with 12+ years experience. Passionate about customer happiness.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Marketing?</h2>
          <p>Join thousands of businesses already using MarketFlow to achieve their goals</p>
          <button className="btn btn-primary" onClick={() => handleNavigation('/checkout.html')}>
            Start Your Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

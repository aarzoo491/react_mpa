import React, { useState } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Checkout() {
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    firstName: '',
    lastName: '',
    company: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.amount) {
      newErrors.amount = 'Amount is required'
    } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          email: '',
          amount: '',
          firstName: '',
          lastName: '',
          company: ''
        })
        setSubmitted(false)
      }, 3000)
    } else {
      setErrors(newErrors)
    }
  }

  const handleNavigation = (href) => {
    window.location.href = href
  }

  return (
    <div className="site" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation />
      
      <section className="hero">
        <div className="container">
          <h1>Complete Your Order</h1>
          <p>Choose your plan and join thousands of successful marketers</p>
        </div>
      </section>

      <section style={{ flex: 1 }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {submitted && (
              <div className="success-message" style={{ marginBottom: '2rem' }}>
                <strong>✓ Success!</strong> Thank you for your order, {formData.firstName}! We've sent a confirmation email to <strong>{formData.email}</strong>. Check your inbox for next steps.
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div className="card">
                <h3>Starter Plan</h3>
                <p style={{ fontSize: '2rem', color: '#667eea', fontWeight: 'bold', margin: '1rem 0' }}>$49<span style={{ fontSize: '0.8rem', color: '#666' }}>/month</span></p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  <li style={{ padding: '0.5rem 0' }}>✓ Up to 10,000 contacts</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Basic automation</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Email support</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Standard templates</li>
                </ul>
              </div>

              <div className="card" style={{ borderTop: '3px solid #667eea' }}>
                <div style={{ background: '#667eea', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px', display: 'inline-block', marginBottom: '1rem', fontSize: '0.9rem' }}>POPULAR</div>
                <h3>Professional Plan</h3>
                <p style={{ fontSize: '2rem', color: '#667eea', fontWeight: 'bold', margin: '1rem 0' }}>$149<span style={{ fontSize: '0.8rem', color: '#666' }}>/month</span></p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  <li style={{ padding: '0.5rem 0' }}>✓ Up to 100,000 contacts</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Advanced automation</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Priority support</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Custom templates</li>
                </ul>
              </div>

              <div className="card">
                <h3>Enterprise Plan</h3>
                <p style={{ fontSize: '2rem', color: '#667eea', fontWeight: 'bold', margin: '1rem 0' }}>Custom</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  <li style={{ padding: '0.5rem 0' }}>✓ Unlimited contacts</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Full automation suite</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Dedicated support</li>
                  <li style={{ padding: '0.5rem 0' }}>✓ Custom development</li>
                </ul>
              </div>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Billing Information</h2>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{ borderColor: errors.firstName ? '#dc3545' : '#ddd' }}
                    />
                    {errors.firstName && (
                      <div style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                        {errors.firstName}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{ borderColor: errors.lastName ? '#dc3545' : '#ddd' }}
                    />
                    {errors.lastName && (
                      <div style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ borderColor: errors.email ? '#dc3545' : '#ddd' }}
                  />
                  {errors.email && (
                    <div style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="amount">Monthly Amount *</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    placeholder="49.00"
                    value={formData.amount}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    style={{ borderColor: errors.amount ? '#dc3545' : '#ddd' }}
                  />
                  {errors.amount && (
                    <div style={{ color: '#dc3545', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                      {errors.amount}
                    </div>
                  )}
                  <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.3rem' }}>
                    💡 Tip: Use $49, $149, or $299 for our standard plans
                  </div>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <button type="submit" className="btn btn-primary" style={{ paddingLeft: '3rem', paddingRight: '3rem', fontSize: '1.1rem' }}>
                    Complete Purchase
                  </button>
                </div>
              </form>

              <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f4ff', borderRadius: '5px', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
                🔒 Your payment information is secure and encrypted. We accept all major credit cards.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

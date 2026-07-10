import React, { useState } from 'react'
import SectionTitle from './SectionTitle.jsx'

const Contact = ({ data, social }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Terima kasih! Pesan Anda telah dikirim.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle 
          title="Hubungi Saya" 
          subtitle="Mari berkolaborasi dan wujudkan project Anda" 
        />

        <div className="contact-content">
          <div className="contact-info">
            <h3>Mari Terhubung</h3>
            <p>Saya terbuka untuk mendiskusikan project baru, ide kreatif, atau kesempatan kolaborasi.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">{data.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <span className="contact-value">{data.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">{data.location}</span>
              </div>
            </div>

            <div className="social-links">
              {social.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nama Anda"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Anda"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Pesan Anda"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .page-section {
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          padding: 6rem 0 2rem;
        }

        @media (max-width: 768px) {
          .page-section {
            padding: 2rem 0;
            min-height: 100vh;
          }
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info h3 {
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }

        .contact-info > p {
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-details {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 8px;
        }

        .contact-label {
          font-size: 0.75rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
        }

        .contact-value {
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-links a {
          padding: 0.5rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .social-links a:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .contact-form {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 2rem;
          border-radius: 12px;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.9rem;
          background: var(--bg-primary);
          color: var(--text-primary);
          transition: border-color 0.2s ease;
          font-family: inherit;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-light);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .social-links {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact

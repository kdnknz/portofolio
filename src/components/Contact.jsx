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
    // Di sini bisa ditambahkan logic untuk mengirim email
    // Untuk sekarang hanya alert
    alert('Terima kasih! Pesan Anda telah dikirim.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle 
          title="Hubungi Saya" 
          subtitle="Mari berkolaborasi dan wujudkan project impian Anda" 
        />

        <div className="contact-content">
          <div className="contact-info">
            <h3>Mari Terhubung</h3>
            <p>Saya selalu terbuka untuk mendiskusikan project baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>{data.email}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>{data.phone}</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>{data.location}</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              {social.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
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
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .page-section {
            padding: 2rem 0;
            min-height: 100vh;
          }
        }

        @media (min-width: 769px) {
          .page-section {
            padding: 6rem 0 2rem;
          }
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .contact-info p {
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          transition: all 0.3s ease;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .contact-item:hover {
          transform: translateX(10px);
          background: rgba(0, 0, 0, 0.25);
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: var(--gradient-1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .contact-item h4 {
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 0.25rem 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .contact-item p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          padding: 0.75rem 1.5rem;
          background: var(--primary-color);
          color: white;
          text-decoration: none;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: var(--secondary-color);
          transform: translateY(-2px);
        }

        .contact-form {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        .contact-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, 
            rgba(102, 126, 234, 0.6), 
            rgba(118, 75, 162, 0.6), 
            rgba(240, 147, 251, 0.6)
          );
          border-radius: 1.5rem 1.5rem 0 0;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1.25rem;
          border: 2px solid rgba(102, 126, 234, 0.2);
          border-radius: 1rem;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
          transform: translateY(-2px);
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

          .social-links a {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
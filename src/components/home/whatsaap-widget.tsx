import React, { useState } from 'react'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '+6281395294204'
  const message = encodeURIComponent('Halo, saya tertarik dengan produk Anda!')
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}>
      {/* Popup WhatsApp */}
      <div
        style={{
          position: 'absolute',
          bottom: isOpen ? '80px' : '20px',
          right: '0',
          backgroundColor: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
          width: '250px',
          transition: 'all 0.3s ease-in-out',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        {/* Tombol Close */}
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            background: 'transparent',
            border: 'none',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          ❌
        </button>

        <p style={{ marginBottom: '10px' }}>Halo! Ada yang bisa kami bantu?</p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            backgroundColor: '#25D366',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
        >
          Chat via WhatsApp
        </a>
      </div>

      {/* Tombol WhatsApp */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: '60px',
          height: '60px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease-in-out',
        }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>
  )
}

export default WhatsAppWidget

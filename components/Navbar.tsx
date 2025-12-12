'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ['hero', 'hizmetler', 'hakkimizda', 'referanslar', 'iletisim']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#hizmetler', label: 'Hizmetler' },
    { href: '#hakkimizda', label: 'Hakkımızda' },
    { href: '#referanslar', label: 'Referanslar' },
    { href: '#iletisim', label: 'İletişim' },
  ]

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top py-3"
      style={{
        background: scrolled
          ? 'rgba(10, 10, 10, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-3 me-2"
            style={{
              width: '45px',
              height: '45px',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            }}
          >
            <Image
              src="https://weblemek.com/wp-content/uploads/2024/12/web-weblemek-beyaz-kare.png"
              alt="Weblemek"
              width={35}
              height={35}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span
            className="fw-bold fs-5"
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Weblemek
          </span>
        </Link>

        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '10px',
          }}
        >
          <i className="bi bi-list text-white fs-4"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-1">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  className="nav-link px-4 py-2 rounded-pill position-relative"
                  style={{
                    color: activeSection === item.href.slice(1) ? '#fff' : 'rgba(255,255,255,0.7)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    background: activeSection === item.href.slice(1)
                      ? 'rgba(99, 102, 241, 0.2)'
                      : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.href.slice(1)) {
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.href.slice(1)) {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3">
            <a
              href="https://wa.me/908508851519"
              className="d-none d-lg-flex align-items-center gap-2 text-decoration-none"
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp"></i>
              <span>+90 850 885 15 19</span>
            </a>
            <Link
              href="#iletisim"
              className="btn px-4 py-2 rounded-pill fw-semibold"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                border: 'none',
                color: 'white',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)'
              }}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

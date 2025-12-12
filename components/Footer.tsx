'use client'

import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { icon: 'bi-facebook', href: 'https://facebook.com/weblemek', label: 'Facebook' },
  { icon: 'bi-instagram', href: 'https://instagram.com/weblemek', label: 'Instagram' },
  { icon: 'bi-linkedin', href: 'https://linkedin.com/company/weblemek', label: 'LinkedIn' },
  { icon: 'bi-twitter-x', href: 'https://x.com/weblemek', label: 'X' },
  { icon: 'bi-youtube', href: 'https://youtube.com/channel/UCLRoqkoi1fSF57SDUkYSF3g', label: 'YouTube' },
]

const services = [
  { name: 'Dijital Pazarlama', href: '#hizmetler' },
  { name: 'Web Geliştirme', href: '#hizmetler' },
  { name: 'Sosyal Medya', href: '#hizmetler' },
  { name: 'Kurumsal Kimlik', href: '#hizmetler' },
  { name: 'SEO Optimizasyonu', href: '#hizmetler' },
]

const quickLinks = [
  { name: 'Ana Sayfa', href: '#hero' },
  { name: 'Hizmetler', href: '#hizmetler' },
  { name: 'Hakkımızda', href: '#hakkimizda' },
  { name: 'Referanslar', href: '#referanslar' },
  { name: 'İletişim', href: '#iletisim' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #050508 100%)',
      }}
    >
      {/* Top Border Gradient */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.3) 50%, transparent 100%)',
        }}
      />

      {/* Background Gradient */}
      <div
        className="position-absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="container position-relative py-5">
        <div className="row g-5 py-4">
          {/* Brand & Description */}
          <div className="col-lg-4">
            <Link href="/" className="d-inline-flex align-items-center text-decoration-none mb-4">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 me-3"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                }}
              >
                <Image
                  src="https://weblemek.com/wp-content/uploads/2024/12/web-weblemek-beyaz-kare.png"
                  alt="Weblemek"
                  width={35}
                  height={35}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span
                className="fw-bold fs-4"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Weblemek
              </span>
            </Link>
            <p
              className="mb-4"
              style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.95rem' }}
            >
              Her büyük başarı, doğru bir adımla başlar. Dijital pazarlama, web yazılım ve
              kurumsal kimlik yönetimi konularında stratejik çözümlerle markanızın gücünü artırın.
            </p>

            {/* Social Links */}
            <div className="d-flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s ease',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-4">Hizmetler</h6>
            <ul className="list-unstyled mb-0">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href={service.href}
                    className="text-decoration-none d-inline-flex align-items-center"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#a5b4fc'
                      e.currentTarget.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-4">Hızlı Linkler</h6>
            <ul className="list-unstyled mb-0">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href={link.href}
                    className="text-decoration-none d-inline-flex align-items-center"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#a5b4fc'
                      e.currentTarget.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            <h6 className="text-white fw-bold mb-4">İletişim</h6>
            <div className="d-flex flex-column gap-3">
              <a
                href="https://wa.me/908508851519"
                className="d-flex align-items-center gap-3 text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a5b4fc')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(37, 211, 102, 0.1)',
                  }}
                >
                  <i className="bi bi-whatsapp" style={{ color: '#25D366' }}></i>
                </div>
                <span style={{ fontSize: '0.9rem' }}>+90 850 885 15 19</span>
              </a>

              <a
                href="mailto:info@weblemek.com"
                className="d-flex align-items-center gap-3 text-decoration-none"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a5b4fc')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(99, 102, 241, 0.1)',
                  }}
                >
                  <i className="bi bi-envelope" style={{ color: '#6366f1' }}></i>
                </div>
                <span style={{ fontSize: '0.9rem' }}>info@weblemek.com</span>
              </a>

              <a
                href="https://maps.app.goo.gl/1rbpDigVow3ckRTQ9"
                className="d-flex align-items-center gap-3 text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a5b4fc')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(244, 63, 94, 0.1)',
                  }}
                >
                  <i className="bi bi-geo-alt" style={{ color: '#f43f5e' }}></i>
                </div>
                <span style={{ fontSize: '0.9rem' }}>İstanbul, Türkiye</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-4 pt-3">
              <h6 className="text-white fw-semibold mb-3" style={{ fontSize: '0.9rem' }}>
                Güncel kalın
              </h6>
              <div className="d-flex gap-2">
                <input
                  type="email"
                  className="form-control border-0 rounded-pill"
                  placeholder="E-posta adresiniz"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff',
                    fontSize: '0.85rem',
                  }}
                />
                <button
                  className="btn rounded-pill px-3 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    border: 'none',
                    color: 'white',
                  }}
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-4 mt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="row align-items-center g-3">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                © {currentYear} Weblemek Dijital Çözümler. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-4">
                <Link
                  href="#"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#a5b4fc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  href="#"
                  className="text-decoration-none"
                  style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#a5b4fc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                >
                  Kullanım Şartları
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

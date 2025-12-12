'use client'

import { useState, useEffect, useRef } from 'react'

const serviceOptions = [
  { id: 'dijital', label: 'Dijital Pazarlama', icon: 'bi-graph-up' },
  { id: 'web', label: 'Web Tasarım', icon: 'bi-globe' },
  { id: 'yazilim', label: 'Özel Yazılım', icon: 'bi-code-slash' },
  { id: 'sosyal', label: 'Sosyal Medya', icon: 'bi-share' },
  { id: 'kurumsal', label: 'Kurumsal Kimlik', icon: 'bi-palette' },
  { id: 'seo', label: 'SEO', icon: 'bi-search' },
]

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(s => s !== serviceId)
        : [...prev, serviceId]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ ...formData, services: selectedServices })
    alert('Mesajınız alındı! En kısa sürede sizinle iletişime geçeceğiz.')
  }

  const contactInfo = [
    {
      icon: 'bi-whatsapp',
      label: 'WhatsApp',
      value: '+90 850 885 15 19',
      href: 'https://wa.me/908508851519',
      color: '#25D366',
    },
    {
      icon: 'bi-envelope',
      label: 'E-posta',
      value: 'info@weblemek.com',
      href: 'mailto:info@weblemek.com',
      color: '#6366f1',
    },
    {
      icon: 'bi-geo-alt',
      label: 'Konum',
      value: 'İstanbul, Türkiye',
      href: 'https://maps.app.goo.gl/1rbpDigVow3ckRTQ9',
      color: '#f43f5e',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="iletisim"
      className="py-5 position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a0a 100%)',
      }}
    >
      {/* Background Elements */}
      <div
        className="position-absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          top: '10%',
          left: '-15%',
        }}
      />
      <div
        className="position-absolute"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
          bottom: '10%',
          right: '-10%',
        }}
      />

      <div className="container py-5 position-relative">
        {/* Section Header */}
        <div
          className="text-center mb-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <span
            className="badge px-4 py-2 rounded-pill mb-3"
            style={{
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              color: '#f9a8d4',
              fontSize: '0.85rem',
            }}
          >
            <i className="bi bi-envelope-paper me-2"></i>
            İletişim
          </span>
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: '#fff', letterSpacing: '-0.02em' }}
          >
            Projenizi{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Konuşalım
            </span>
          </h2>
          <p
            className="lead mx-auto"
            style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.5)' }}
          >
            Dijital dönüşüm yolculuğunuzda size nasıl yardımcı olabileceğimizi keşfedin
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 0.8s ease-out 0.2s',
              }}
            >
              <h4 className="text-white fw-bold mb-4">Bize Ulaşın</h4>
              <p className="mb-5" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                Projeleriniz için bizimle iletişime geçin. Ücretsiz danışmanlık ile size en uygun
                çözümü birlikte bulalım.
              </p>

              {/* Contact Cards */}
              <div className="d-flex flex-column gap-3 mb-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-4 p-4 rounded-4 text-decoration-none"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.transform = 'translateX(10px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: `${info.color}20`,
                      }}
                    >
                      <i className={`bi ${info.icon} fs-5`} style={{ color: info.color }}></i>
                    </div>
                    <div>
                      <small style={{ color: 'rgba(255,255,255,0.5)' }}>{info.label}</small>
                      <h6 className="text-white fw-semibold mb-0">{info.value}</h6>
                    </div>
                    <i className="bi bi-arrow-right ms-auto" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h6 className="text-white fw-semibold mb-3">Sosyal Medya</h6>
                <div className="d-flex gap-2">
                  {[
                    { icon: 'bi-facebook', href: 'https://facebook.com/weblemek' },
                    { icon: 'bi-instagram', href: 'https://instagram.com/weblemek' },
                    { icon: 'bi-linkedin', href: 'https://linkedin.com/company/weblemek' },
                    { icon: 'bi-twitter-x', href: 'https://x.com/weblemek' },
                    { icon: 'bi-youtube', href: 'https://youtube.com/channel/UCLRoqkoi1fSF57SDUkYSF3g' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: '45px',
                        height: '45px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        color: 'rgba(255,255,255,0.5)',
                        transition: 'all 0.3s ease',
                      }}
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
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              className="rounded-4 p-4 p-lg-5"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 0.8s ease-out 0.4s',
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Service Selection */}
                <div className="mb-4">
                  <label className="form-label text-white fw-semibold mb-3">
                    Hangi hizmetlerle ilgileniyorsunuz?
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        className="btn rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                        style={{
                          background: selectedServices.includes(service.id)
                            ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                            : 'rgba(255,255,255,0.05)',
                          border: selectedServices.includes(service.id)
                            ? 'none'
                            : '1px solid rgba(255,255,255,0.1)',
                          color: selectedServices.includes(service.id)
                            ? '#fff'
                            : 'rgba(255,255,255,0.7)',
                          fontSize: '0.85rem',
                          transition: 'all 0.3s ease',
                        }}
                        onClick={() => handleServiceToggle(service.id)}
                      >
                        <i className={`bi ${service.icon}`}></i>
                        {service.label}
                        {selectedServices.includes(service.id) && (
                          <i className="bi bi-check-lg"></i>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold small">Ad Soyad</label>
                    <input
                      type="text"
                      className="form-control form-control-lg border-0 rounded-3"
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: '#fff',
                        boxShadow: focusedField === 'name'
                          ? '0 0 0 2px rgba(99, 102, 241, 0.5)'
                          : 'none',
                        transition: 'all 0.3s ease',
                      }}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold small">E-posta</label>
                    <input
                      type="email"
                      className="form-control form-control-lg border-0 rounded-3"
                      placeholder="ornek@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: '#fff',
                        boxShadow: focusedField === 'email'
                          ? '0 0 0 2px rgba(99, 102, 241, 0.5)'
                          : 'none',
                        transition: 'all 0.3s ease',
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold small">Telefon</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg border-0 rounded-3"
                      placeholder="+90 5XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: '#fff',
                        boxShadow: focusedField === 'phone'
                          ? '0 0 0 2px rgba(99, 102, 241, 0.5)'
                          : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-white fw-semibold small">Şirket (Opsiyonel)</label>
                    <input
                      type="text"
                      className="form-control form-control-lg border-0 rounded-3"
                      placeholder="Şirket Adı"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: '#fff',
                        boxShadow: focusedField === 'company'
                          ? '0 0 0 2px rgba(99, 102, 241, 0.5)'
                          : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label text-white fw-semibold small">Mesajınız</label>
                  <textarea
                    className="form-control form-control-lg border-0 rounded-3"
                    rows={4}
                    placeholder="Projeniz hakkında bize bilgi verin..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: '#fff',
                      resize: 'none',
                      boxShadow: focusedField === 'message'
                        ? '0 0 0 2px rgba(99, 102, 241, 0.5)'
                        : 'none',
                      transition: 'all 0.3s ease',
                    }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg w-100 rounded-pill py-3 fw-semibold position-relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    border: 'none',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(99, 102, 241, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  <i className="bi bi-send me-2"></i>
                  Mesaj Gönder
                </button>

                <p className="text-center mt-3 mb-0" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
                  <i className="bi bi-shield-check me-1"></i>
                  Bilgileriniz gizli tutulacaktır
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

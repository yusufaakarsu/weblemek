'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 'dijital-pazarlama',
    icon: 'bi-graph-up-arrow',
    title: 'Dijital Pazarlama',
    description: 'Veri odaklı stratejilerle markanızı hedef kitlenize ulaştırıyor, dönüşüm oranlarınızı maksimize ediyoruz.',
    features: ['Google Ads', 'Meta Ads', 'Analytics', 'ROI Optimizasyonu'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    shadowColor: 'rgba(99, 102, 241, 0.3)',
  },
  {
    id: 'web-gelistirme',
    icon: 'bi-code-slash',
    title: 'Web Geliştirme',
    description: 'Modern teknolojilerle hızlı, güvenli ve SEO dostu web siteleri ve uygulamalar geliştiriyoruz.',
    features: ['React/Next.js', 'Responsive Design', 'E-Ticaret', 'CMS Entegrasyonu'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    shadowColor: 'rgba(6, 182, 212, 0.3)',
  },
  {
    id: 'sosyal-medya',
    icon: 'bi-share',
    title: 'Sosyal Medya',
    description: 'Markanızın hikayesini güçlü içeriklerle anlatıyor, topluluk oluşturuyor ve etkileşimi artırıyoruz.',
    features: ['İçerik Üretimi', 'Topluluk Yönetimi', 'Influencer Marketing', 'Raporlama'],
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    shadowColor: 'rgba(236, 72, 153, 0.3)',
  },
  {
    id: 'kurumsal-kimlik',
    icon: 'bi-palette',
    title: 'Kurumsal Kimlik',
    description: 'Markanızın DNA\'sını yansıtan, akılda kalıcı ve tutarlı bir görsel kimlik oluşturuyoruz.',
    features: ['Logo Tasarımı', 'Brand Guidelines', 'Basılı Materyaller', 'Dijital Varlıklar'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    shadowColor: 'rgba(245, 158, 11, 0.3)',
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 150)
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll('.service-card')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hizmetler"
      className="py-5 position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f1a 100%)',
      }}
    >
      {/* Background Elements */}
      <div
        className="position-absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
        }}
      />
      <div
        className="position-absolute"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          bottom: '10%',
          right: '-5%',
        }}
      />

      <div className="container py-5 position-relative">
        {/* Section Header */}
        <div className="text-center mb-5 pb-4">
          <span
            className="badge px-4 py-2 rounded-pill mb-3"
            style={{
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              color: '#a5b4fc',
              fontSize: '0.85rem',
            }}
          >
            <i className="bi bi-stars me-2"></i>
            Hizmetlerimiz
          </span>
          <h2
            className="display-4 fw-bold mb-3"
            style={{
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            Dijital Başarınız İçin{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Tüm Çözümler
            </span>
          </h2>
          <p
            className="lead mx-auto"
            style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.5)' }}
          >
            Markanızı büyütmek için ihtiyacınız olan tüm dijital hizmetleri tek çatı altında sunuyoruz
          </p>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div
                className="service-card h-100 rounded-4 p-4 position-relative overflow-hidden"
                data-index={index}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  opacity: visibleCards.includes(index) ? 1 : 0,
                  transform: visibleCards.includes(index)
                    ? 'translateY(0) scale(1)'
                    : 'translateY(30px) scale(0.95)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 30px 60px ${service.shadowColor}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Icon */}
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-3 mb-4"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: service.gradient,
                    boxShadow: `0 10px 30px ${service.shadowColor}`,
                  }}
                >
                  <i className={`bi ${service.icon} text-white fs-4`}></i>
                </div>

                {/* Content */}
                <h4 className="fw-bold text-white mb-3">{service.title}</h4>
                <p
                  className="mb-4"
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7 }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="badge rounded-pill px-3 py-2"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#iletisim"
                  className="d-inline-flex align-items-center text-decoration-none"
                  style={{
                    color: '#a5b4fc',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#a5b4fc'
                  }}
                >
                  Detaylı Bilgi
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

                {/* Hover Gradient Line */}
                <div
                  className="position-absolute bottom-0 start-0 w-100"
                  style={{
                    height: '3px',
                    background: service.gradient,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5 pt-4">
          <p className="mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            İhtiyacınıza özel bir çözüm mü arıyorsunuz?
          </p>
          <a
            href="#iletisim"
            className="btn btn-lg px-5 py-3 rounded-pill fw-semibold"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            <i className="bi bi-chat-dots me-2"></i>
            Ücretsiz Danışmanlık Alın
          </a>
        </div>
      </div>
    </section>
  )
}

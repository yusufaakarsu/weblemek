'use client'

import { useEffect, useState, useRef } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { key: 'projects', value: 50, suffix: '+', label: 'Proje Tamamlandı', icon: 'bi-folder-check' },
    { key: 'clients', value: 30, suffix: '+', label: 'Mutlu Müşteri', icon: 'bi-people' },
    { key: 'years', value: 5, suffix: '+', label: 'Yıllık Tecrübe', icon: 'bi-calendar-check' },
    { key: 'satisfaction', value: 98, suffix: '%', label: 'Memnuniyet', icon: 'bi-emoji-smile' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          stats.forEach((stat) => {
            let start = 0
            const end = stat.value
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                start = end
                clearInterval(timer)
              }
              setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }))
            }, 16)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    { icon: 'bi-lightning-charge', title: 'Hızlı Teslimat', desc: 'Projelerinizi zamanında teslim ediyoruz' },
    { icon: 'bi-shield-check', title: 'Güvenilir Partner', desc: 'Uzun vadeli iş ortaklıkları kuruyoruz' },
    { icon: 'bi-headset', title: '7/24 Destek', desc: 'Her zaman yanınızdayız' },
    { icon: 'bi-graph-up', title: 'Sonuç Odaklı', desc: 'Ölçülebilir başarılar sağlıyoruz' },
  ]

  return (
    <section
      ref={sectionRef}
      id="hakkimizda"
      className="py-5 position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a0a 100%)',
      }}
    >
      {/* Background Gradient */}
      <div
        className="position-absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="container py-5 position-relative">
        <div className="row align-items-center g-5">
          {/* Left Side - Content */}
          <div className="col-lg-6">
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <span
                className="badge px-4 py-2 rounded-pill mb-4"
                style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  color: '#c4b5fd',
                  fontSize: '0.85rem',
                }}
              >
                <i className="bi bi-info-circle me-2"></i>
                Hakkımızda
              </span>

              <h2
                className="display-4 fw-bold mb-4"
                style={{ color: '#fff', lineHeight: 1.2 }}
              >
                Dijital Dünyada{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Güvenilir
                </span>{' '}
                İş Ortağınız
              </h2>

              <p
                className="lead mb-4"
                style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}
              >
                Her büyük başarı, doğru bir adımla başlar. Weblemek olarak, markaların dijital
                varlıklarını güçlendirmek ve hedef kitlelerine daha etkili bir şekilde ulaşmalarını
                sağlamak için çalışıyoruz.
              </p>

              <p
                className="mb-5"
                style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}
              >
                Deneyimli ekibimiz, dijital pazarlama, web geliştirme ve kurumsal kimlik konularında
                stratejik çözümlerle markanızın gücünü artırıyor. Her projeye özel yaklaşımımızla
                fark yaratıyoruz.
              </p>

              {/* Feature Grid */}
              <div className="row g-3">
                {features.map((feature, index) => (
                  <div key={index} className="col-6">
                    <div
                      className="d-flex align-items-start gap-3 p-3 rounded-3"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: `all 0.6s ease-out ${0.2 + index * 0.1}s`,
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                        }}
                      >
                        <i className={`bi ${feature.icon}`} style={{ color: '#a5b4fc' }}></i>
                      </div>
                      <div>
                        <h6 className="text-white fw-semibold mb-1" style={{ fontSize: '0.9rem' }}>
                          {feature.title}
                        </h6>
                        <small style={{ color: 'rgba(255,255,255,0.5)' }}>{feature.desc}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Visual */}
          <div className="col-lg-6">
            <div
              className="position-relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 0.8s ease-out 0.3s',
              }}
            >
              {/* Stats Grid */}
              <div className="row g-4">
                {stats.map((stat) => (
                  <div key={stat.key} className="col-6">
                    <div
                      className="text-center p-4 rounded-4 position-relative overflow-hidden"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                        e.currentTarget.style.transform = 'translateY(-5px)'
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.15)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                        }}
                      >
                        <i className={`bi ${stat.icon}`} style={{ color: '#a5b4fc', fontSize: '1.2rem' }}></i>
                      </div>
                      <h3
                        className="display-5 fw-bold mb-1"
                        style={{
                          background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {counts[stat.key as keyof typeof counts]}{stat.suffix}
                      </h3>
                      <p className="mb-0" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div
                className="position-absolute rounded-circle"
                style={{
                  width: '200px',
                  height: '200px',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                  top: '-50px',
                  right: '-50px',
                  zIndex: -1,
                  filter: 'blur(40px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-5 pt-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.6s',
          }}
        >
          <div
            className="d-inline-flex align-items-center gap-4 p-4 rounded-4"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div className="text-start">
              <h5 className="text-white fw-bold mb-1">Projenizi Konuşalım</h5>
              <p className="mb-0" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                Ücretsiz danışmanlık için hemen iletişime geçin
              </p>
            </div>
            <a
              href="#iletisim"
              className="btn px-4 py-3 rounded-pill fw-semibold flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                border: 'none',
                color: 'white',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)'
              }}
            >
              Teklif Al
              <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

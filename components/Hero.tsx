'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ overflow: 'hidden' }}>
        {/* Gradient Orbs */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            top: '-200px',
            right: '-200px',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            bottom: '-100px',
            left: '-100px',
            animation: 'float 6s ease-in-out infinite reverse',
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />

        {/* Grid Pattern */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: 'rgba(255,255,255,0.3)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            {/* Badge */}
            <div
              className={`mb-4 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <span
                className="badge px-4 py-2 rounded-pill"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#a5b4fc',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                <i className="bi bi-lightning-charge-fill me-2"></i>
                Dijital Dönüşümün Gücü
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`display-2 fw-bold text-white mb-4 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.2s',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Markanızı{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Geleceğe
              </span>{' '}
              Taşıyoruz
            </h1>

            {/* Subtitle */}
            <p
              className={`lead mb-5 mx-auto ${isVisible ? 'animate-fade-in' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.4s',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.25rem',
                maxWidth: '700px',
                lineHeight: 1.7,
              }}
            >
              Dijital pazarlama stratejileri, yaratıcı tasarım ve teknoloji çözümleriyle
              markanızın dijital dünyada fark yaratmasını sağlıyoruz.
            </p>

            {/* CTA Buttons */}
            <div
              className={`d-flex flex-wrap justify-content-center gap-3 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.6s',
              }}
            >
              <Link
                href="#iletisim"
                className="btn btn-lg px-5 py-3 rounded-pill fw-semibold position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  border: 'none',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(99, 102, 241, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(99, 102, 241, 0.3)'
                }}
              >
                Projenizi Başlatalım
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <Link
                href="#referanslar"
                className="btn btn-lg px-5 py-3 rounded-pill fw-semibold"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
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
                <i className="bi bi-play-circle me-2"></i>
                Projelerimizi İnceleyin
              </Link>
            </div>

            {/* Stats */}
            <div
              className={`row g-4 mt-5 pt-5 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.8s',
              }}
            >
              {[
                { value: '50+', label: 'Tamamlanan Proje' },
                { value: '30+', label: 'Mutlu Müşteri' },
                { value: '5+', label: 'Yıllık Deneyim' },
                { value: '%98', label: 'Memnuniyet' },
              ].map((stat, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div
                    className="text-center p-3 rounded-4"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <h3
                      className="fw-bold mb-1"
                      style={{
                        background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '2rem',
                      }}
                    >
                      {stat.value}
                    </h3>
                    <small style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="position-absolute start-50 translate-middle-x"
        style={{ bottom: '40px' }}
      >
        <Link
          href="#hizmetler"
          className="d-flex flex-column align-items-center text-decoration-none"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          <small className="mb-2">Keşfedin</small>
          <div
            style={{
              width: '30px',
              height: '50px',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '20px',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '10px',
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '2px',
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'scrollDown 2s ease-in-out infinite',
              }}
            />
          </div>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.15; }
        }
        @keyframes floatParticle {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes scrollDown {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(15px); opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}

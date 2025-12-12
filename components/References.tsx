'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const references = [
  {
    name: 'Erka Group',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/09/erkagroup.png'
  },
  {
    name: 'Türkiye Yeşilay Cemiyeti',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/12/yesilay-siyah.png'
  },
  {
    name: 'Şule Yüksel Şenler Vakfı',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/09/sysv.png'
  },
  {
    name: 'Usturlab',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/09/usturlab.png'
  },
  {
    name: 'Bilim Disleksi',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/09/bilimdisleksi.png'
  },
  {
    name: 'Interwo',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/09/interwo.png'
  },
  {
    name: 'Keşifhane',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/09/kesifhane.png'
  },
  {
    name: 'Okapi - Drop Giyim',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/09/okapi.png'
  },
  {
    name: 'Mutluluk Molası',
    logo: 'https://www.weblemek.com/wp-content/uploads/2024/09/mutlulukmolasi.png'
  },
]

export default function References() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      ref={sectionRef}
      id="referanslar"
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
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
          top: '20%',
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
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              color: '#67e8f9',
              fontSize: '0.85rem',
            }}
          >
            <i className="bi bi-award me-2"></i>
            Referanslarımız
          </span>
          <h2
            className="display-4 fw-bold mb-3"
            style={{ color: '#fff', letterSpacing: '-0.02em' }}
          >
            Güvendikleri İçin{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Teşekkürler
            </span>
          </h2>
          <p
            className="lead mx-auto"
            style={{ maxWidth: '600px', color: 'rgba(255,255,255,0.5)' }}
          >
            Türkiye'nin önde gelen markaları dijital dönüşüm yolculuklarında bizi tercih ediyor
          </p>
        </div>

        {/* Logo Grid */}
        <div className="row g-4 justify-content-center">
          {references.map((ref, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
              }}
            >
              <div
                className="h-100 rounded-4 p-4 d-flex flex-column align-items-center justify-content-center text-center"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  minHeight: '180px',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(6, 182, 212, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-3 p-3 rounded-3"
                  style={{
                    width: '100%',
                    height: '80px',
                    background: 'rgba(255,255,255,0.95)',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '12px',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.3s ease',
                    }}
                    sizes="150px"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(100%)'
                    }}
                  />
                </div>
                <h6
                  className="fw-medium mb-0"
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}
                >
                  {ref.name}
                </h6>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial / CTA Section */}
        <div
          className="mt-5 pt-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.5s',
          }}
        >
          <div
            className="rounded-4 p-5 text-center position-relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {/* Decorative Elements */}
            <div
              className="position-absolute"
              style={{
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
                top: '-100px',
                left: '-100px',
              }}
            />
            <div
              className="position-absolute"
              style={{
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                bottom: '-100px',
                right: '-100px',
              }}
            />

            <div className="position-relative">
              <i
                className="bi bi-quote display-4 mb-3"
                style={{ color: 'rgba(99, 102, 241, 0.3)' }}
              ></i>
              <p
                className="lead mb-4 mx-auto"
                style={{ maxWidth: '700px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}
              >
                "Weblemek ile çalışmak, dijital varlığımızı tamamen dönüştürdü. Profesyonel
                yaklaşımları ve yaratıcı çözümleriyle beklentilerimizin çok ötesinde sonuçlar aldık."
              </p>
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  }}
                >
                  <i className="bi bi-person text-white"></i>
                </div>
                <div className="text-start">
                  <h6 className="text-white fw-bold mb-0">Memnun Müşteri</h6>
                  <small style={{ color: 'rgba(255,255,255,0.5)' }}>CEO, Partner Şirket</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-5"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.7s',
          }}
        >
          <p className="mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Siz de başarı hikayemizin bir parçası olmak ister misiniz?
          </p>
          <a
            href="#iletisim"
            className="btn btn-lg px-5 py-3 rounded-pill fw-semibold"
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
              border: 'none',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 40px rgba(6, 182, 212, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(6, 182, 212, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(6, 182, 212, 0.3)'
            }}
          >
            <i className="bi bi-rocket-takeoff me-2"></i>
            Projenize Başlayın
          </a>
        </div>
      </div>
    </section>
  )
}

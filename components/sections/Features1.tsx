'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Features1() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <style jsx>{`
        .text-gold {
          color: #B6862C;
        }
        .how-it-works-tag {
          display: inline-flex;
          align-items: center;
          background-color: #fdf8ed; /* لون الخلفية الفاتح */
          border: 2px solid white;
          border-radius: 50px;
          padding: 8px 16px;
        }
        .dots-icon {
          width: 20px;
          margin-right: 8px;
        }
        .how-it-works-text {
          font-weight: bold;
          text-transform: uppercase;
          font-size: 14px;
          color: #B6862C;
          letter-spacing: 0.5px;
        }
        /* لضمان تساوي ارتفاع بطاقات الميزة */
        .feature-col {
          display: flex;
        }
        .feature-item {
          flex: 1;
        }
      `}</style>

      <section className="features-1 section-padding">
        {/* أول حاوية بنفس الحجم */}
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="row">
            <div className="col-lg-4">
              <div className="how-it-works-tag">
                <img src="/assets/imgs/features-1/dotis.png" alt="infinia" className="dots-icon" />
                <span className="how-it-works-text">HOW IT WORKS</span>
              </div>

              <h2 className="fw-bold mt-4 lh-sm">
                Invest in <span className="fw-bold">Dubai Real Estate</span> Flips 
                <span className="text-gold fst-italic" data-aos="fade-zoom-in" data-aos-delay={400}> in 3 Steps</span>
              </h2>
            </div>

            <div className="col-lg-8">
              <div className="d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">
                <div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={100}>
                  <img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/infinia (1).png" alt="infinia" />
                </div>
                <div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={200}>
                  <img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/infinia (2).png" alt="infinia" />
                </div>
                <div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={300}>
                  <img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/infinia (3).png" alt="infinia" />
                  <Link
                    href="#"
                    onClick={() => setOpen(true)}
                    scroll={false}
                    className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up position-absolute bottom-0 mb-4 start-50 translate-middle-x"
                  >
                    <span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <path 
                          d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" 
                          stroke="#937326" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                      </svg>
                    </span>
                    <span className="fw-bold fs-7 text-900">
                      How It Work ?
                    </span>
                  </Link>
                  <ModalVideo
                    channel='youtube'
                    isOpen={isOpen}
                    videoId="gXFATcwrO-U"
                    onClose={() => setOpen(false)}
                  />
                </div>
                <img className="position-absolute z-2 star-lg" src="/assets/imgs/features-1/star-lg.png" alt="infinia" />
                <img className="position-absolute z-2 star-md" src="/assets/imgs/features-1/star-md.png" alt="infinia" />
              </div>
            </div>
          </div>
        </div>

        {/* ثاني حاوية بنفس الحجم */}
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="row mt-10">
            {/* عنصر الميزة الأول */}
            <div 
              className="col-lg-4 col-md-6 feature-col" 
              data-aos="fade-zoom-in" 
              data-aos-delay={50}
            >
              <div 
                className="feature-item mb-5 mb-lg-0" 
                style={{
                  border: "1px solid #d1c4a8", 
                  borderRadius: "10px", 
                  padding: "15px"
                }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img 
                      src="/assets/imgs/features-1/material-symbols-light_map-search.svg" 
                      alt="infinia" 
                    />
                  </div>
                </div>
                <h6>Browse</h6>
                <p>Browse ready-to-flip properties. Filter by ROI, location, or type.</p>
              </div>
            </div>

            {/* عنصر الميزة الثاني */}
            <div 
              className="col-lg-4 col-md-6 feature-col" 
              data-aos="fade-zoom-in" 
              data-aos-delay={100}
            >
              <div 
                className="feature-item mb-5 mb-lg-0" 
                style={{
                  border: "1px solid #d1c4a8", 
                  borderRadius: "10px", 
                  padding: "15px"
                }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img 
                      src="/assets/imgs/features-1/material-symbols-light_map-search (2).svg" 
                      alt="infinia" 
                    />
                  </div>
                </div>
                <h6>Invest</h6>
                <p>Invest with just 1000 AED. We handle legal checks, ownership, and management—zero hassle.</p>
              </div>
            </div>

            {/* عنصر الميزة الثالث */}
            <div 
              className="col-lg-4 col-md-6 feature-col" 
              data-aos="fade-zoom-in" 
              data-aos-delay={200}
            >
              <div 
                className="feature-item mb-5 mb-lg-0" 
                style={{
                  border: "1px solid #d1c4a8", 
                  borderRadius: "10px", 
                  padding: "15px"
                }}
              >
                <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div className="icon">
                    <img 
                      src="/assets/imgs/features-1/material-symbols-light_map-search (1).svg" 
                      alt="infinia" 
                    />
                  </div>
                </div>
                <h6>Earn</h6>
                <p>We transform properties with high-impact renovations and sell for maximum profit. Flip fast, earn faster—your investment, your return.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

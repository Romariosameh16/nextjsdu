"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero1() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <>
      <section className="position-relative overflow-hidden section-padding">
        <div className="container">
          <div className="row content align-items-center">
            <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
              <div className="pe-2">
                <Link
                  href="#"
                  className="d-flex align-items-center bg-light rounded-pill px-3 py-2 shadow-sm"
                  style={{ textDecoration: "none", color: "#835224" }}
                >
                  <span
                    className="bg-brown text-white fw-bold rounded-pill px-3 py-1"
                    style={{ backgroundColor: "#835224" }}
                  >
                    Hot
                  </span>
                  <span className="fs-6 fw-medium mx-2">Properties funds</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={19}
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375"
                      stroke="#835224"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <h3 className="ds-3 mt-4 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>
                  Flip Dubai Real Estate. Invest Smart, Earn Fast.
                </h3>
                <p className="pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>
                  Own a share in high-growth Dubai properties for as little as 1,000 AED. Enjoy fast returns
                  from luxury villas to downtown apartments—no brokers, no hassle.
                </p>
                <div className="d-flex flex-column flex-md-row gap-3">
  <Link
    href="/page-contact-1"
    className="btn w-100 w-md-auto"
    style={{
      background: "linear-gradient(90deg, #835224 0%, #D4AF37 100%)",
      color: "white",
      padding: "12px 24px",
      borderRadius: "10px",
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      border: "none",
    }}
    data-aos="fade-zoom-in"
    data-aos-delay={300}
  >
    Start Flipping Now
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </Link>

  <Link
    href="/page-contact-1"
    className="btn w-100 w-md-auto"
    style={{
      backgroundColor: "white",
      color: "#835224",
      padding: "12px 24px",
      borderRadius: "10px",
      fontWeight: "bold",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      border: "2px solid #835224",
    }}
    data-aos="fade-zoom-in"
    data-aos-delay={500}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#835224" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92V19a2 2 0 0 1-2 2h-3c-4.97 0-9-4.03-9-9V9a2 2 0 0 1 2-2h2.08" />
      <path d="M17 3h5v5" />
      <path d="M16 8l5-5" />
    </svg>
    Contact Us
  </Link>
</div>
</div>
</div>

            {/* إضافة الصورة الجديدة */}
            <div className="col-lg-6 position-relative justify-content-center">
              <img className="hero-img" src="/assets/imgs/hero-1/Container (6).png" alt="infinia" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";
import Link from "next/link";

export default function Newsletter1() {
  return (
    <section
      style={{
        background: "#ffffff", // خلفية بيضاء للخارج
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
      className="section-newsletter-1 pb-120 pt-120 fix position-relative"
    >
      <div className="container position-relative fix">
        <div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
          <div className="col-lg-6 my-4">
            <div className="row">
              <div className="ms-lg-4">
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3"
                  src="/assets/imgs/newsletter-1/img-1.png"
                  alt="infinia"
                />
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3 aos-init aos-animate"
                  src="/assets/imgs/newsletter-1/img-2.png"
                  alt="infinia"
                  data-aos="fade-zoom-in"
                  data-aos-delay="50"
                />
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline"
                  src="/assets/imgs/newsletter-1/img-3.png"
                  alt="infinia"
                />
              </div>
            </div>
            <div className="row">
              <div>
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3"
                  src="/assets/imgs/newsletter-1/img-4.png"
                  alt="infinia"
                />
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3 aos-init aos-animate"
                  src="/assets/imgs/newsletter-1/img-5.png"
                  alt="infinia"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                />
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3"
                  src="/assets/imgs/newsletter-1/img-6.png"
                  alt="infinia"
                />
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3 aos-init"
                  src="/assets/imgs/newsletter-1/img-7.png"
                  alt="infinia"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                />
              </div>
            </div>
            <div className="row d-none d-lg-flex">
              <div className="me-lg-0">
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3 aos-init"
                  src="/assets/imgs/newsletter-1/img-8.png"
                  alt="infinia"
                  data-aos="fade-zoom-in"
                  data-aos-delay="50"
                />
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3 aos-init"
                  src="/assets/imgs/newsletter-1/img-9.png"
                  alt="infinia"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                />
                <img
                  className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline"
                  src="/assets/imgs/newsletter-1/img-10.png"
                  alt="infinia"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5 text-lg-start text-center">
            <div className="mb-3">
              <button
                className="btn btn-outline-primary px-4 py-2 fw-bold"
                style={{ borderRadius: "999px" }}
              >
                GET STARTED
              </button>
            </div>
            <h2 className="mt-3 mb-3 fw-bold">
              Ready to Claim Your Stake in Dubai?
            </h2>
            <p className="fs-5 mb-4">
              Start with just 1000 AED and unlock tax-free returns from the
              world's fastest-growing property market.
            </p>
            <a href="/start-flipping">
              <button
                className="btn btn-primary px-4 py-2 fw-bold"
                style={{ borderRadius: "999px" }}
              >
                Start Flipping Today{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                  className="ms-2"
                >
                  <path
                    d="M12.5477 11.3147V5.30603H6.53906"
                    stroke="currentColor"
                    strokeWidth="1.06"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.3707 5.48276L5.125 12.7284"
                    stroke="currentColor"
                    strokeWidth="1.06"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle z-0">
          <img src="/assets/imgs/newsletter-1/bg-line.png" alt="infinia" />
        </div>
        <div className="bouncing-blobs-container rounded-4 fix">
          <div className="bouncing-blobs-glass rounded-4"></div>
          <div className="bouncing-blobs">
            <div className="bouncing-blob bouncing-blob--green"></div>
            <div className="bouncing-blob bouncing-blob--primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

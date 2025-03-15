import Link from "next/link";

export default function Services1() {
  return (
    <>
      <section className="section-padding" style={{ backgroundColor: "#FBF7EB" }}>
        <div className="container">
          {/* العنوان في الأعلى */}
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              style={{ backgroundColor: "#FBF7EB" }}
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="/assets/imgs/features-1/dotis.png" alt="infinia" />
              <span
                className="tag-spacing fs-7 fw-bold ms-2 text-uppercase"
                style={{ color: "#8E6926" }}
              >
                What we offers
              </span>
            </div>
            <h3
              className="ds-3 my-3"
              data-aos="fade-zoom-in"
              data-aos-delay={300}
              style={{ color: "#906C26" }}
            >
              Explore Our Services
            </h3>
            <p data-aos="fade-zoom-in" data-aos-delay={100}>
              From first-time investors to seasoned developers, we provide
              tailored solutions to grow your wealth <br /> in Dubai’s booming
              property market.
            </p>
          </div>

          {/* البطاقات الثلاثة */}
          <div className="row mt-6 position-relative">
            {/* البطاقة الأولى */}
            <div className="col-lg-4">
              <div
                className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
              
                 <div className="card-service bg-white p-6 rounded-3" style={{ border: "1px solid #937326" }}>

                
                  <img src="/assets/imgs/service-1/icon-1.svg" alt="infinia" />
                  <h6 className="my-3">For Investors</h6>
                  <p className="mb-6">
				  Invest in curated off-plan and ready properties (villas, apartments, commercial spaces) with projected ROI of 10-20%.
				  Let our experts handle renovations, sales, and profit distribution.
                  </p>
                  <Link
                    href="#"
                    className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                  >
                    <svg
                      className="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_226_5470)">
                        <path
                          className="fill-dark"
                          d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                        fill="#111827"
                      />
                    </svg>
                    <span className="fw-bold fs-7 text-900">Learn More</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* البطاقة الثانية */}
            <div className="col-lg-4">
              <div
                className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                                <div className="card-service bg-white p-6 rounded-3" style={{ border: "1px solid #937326" }}>

                  <img src="/assets/imgs/service-1/icon-3.svg" alt="infinia" />
                  <h6 className="my-3">For Developers</h6>
                  <p className="mb-6">
				  List your project and access global investors to fund off-plan or renovation ventures. Full legal support for Dubai Land Department approvals.
                  </p>
                  <Link
                    href="#"
                    className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                  >
                    <svg
                      className="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_226_5470)">
                        <path
                          className="fill-dark"
                          d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                        fill="#111827"
                      />
                    </svg>
                    <span className="fw-bold fs-7 text-900">Learn More</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* البطاقة الثالثة */}
            <div className="col-lg-4">
              <div
                className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                               <div className="card-service bg-white p-6 rounded-3" style={{ border: "1px solid #937326" }}>

                  <img src="/assets/imgs/service-1/icon-5.svg" alt="infinia" />
                  <h6 className="my-3">For Partners</h6>
                  <p className="mb-6">
				  Co-invest in large-scale developments like Emaar South or Dubai Hills.. Earn commissions for connecting investors or developers.
                  </p>
                  <Link
                    href="#"
                    className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                  >
                    <svg
                      className="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_226_5470)">
                        <path
                          className="fill-dark"
                          d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                          fill="#111827"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                        fill="#111827"
                      />
                    </svg>
                    <span className="fw-bold fs-7 text-900">Learn More</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* الخلفية الذهبية خلف البطاقات (فارغة في الوقت الحالي) */}
            <div
              className="position-absolute top-50 start-50 translate-middle z-0"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

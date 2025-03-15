'use client'
import Layout from "@/components/layout/Layout"
import CountUp from 'react-countup'

export default function PageContact1() {

	return (
		<>

			<Layout >

				{/* Contact 4*/}
				<section className="section-contact-4 bg-4 section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
							<div className="pe-lg-8 me-lg-auto mb-5 mb-lg-0">
    <h3 style={{ fontSize: "58px" }}>Get in Touch – Let’s Build Your Dubai Real Estate Portfolio.</h3>
    <p className="fs-5">Ready to invest or have questions? Our Dubai-based team is here to help you every step of the way.”</p>
</div>

							</div>
							<div className="col-lg-6">
								<div className="rounded-4 border border-5 border-white zoom-img mb-5">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-1/img1.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="rounded-4 border border-5 border-white zoom-img mb-5 mb-lg-0">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-1/ini1.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="h-100 bg-primary rounded-4 d-flex align-items-center justify-content-center border position-relative border-5 fix border-white py-5">
									<div className="position-relative z-1 fix">
										<div className="d-flex justify-content-center">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<h1 className="count fw-black text-white my-0">+<span className="odometer" /><CountUp end={264} enableScrollSpy={true} /></h1>
										<p className="fs-5 text-100-keep mb-0">Happy Investors</p>
									</div>
									<img className="position-absolute top-50 start-50 translate-middle z-0" src="/assets/imgs/contact-4/img-bg-1.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="rounded-4 border border-5 border-white zoom-img mt-5 mt-lg-0">
									<img className="rounded-4 w-100" src="/assets/imgs/contact-1/ini2.png" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Contact 5*/}
				<section className="section-contact-5 section-padding">
  <div className="container">
    <div className="row justify-content-center text-center">
      
      {/* Dubai Office */}
      <div className="col-12 col-md-4">
        <div className="feature-item hover-up">
          <div className="icon-container">
            <img src="/assets/imgs/contact-2/Vector (20).svg" alt="Dubai Office" className="icon" />
          </div>
          <h6>Dubai Office</h6>
          <p className="text-500">Dec Towers, Dubai Marina, Dubai, UAE</p>
        </div>
      </div>

      {/* Phone / WhatsApp */}
      <div className="col-12 col-md-4">
        <div className="feature-item hover-up">
          <div className="icon-container">
            <img src="/assets/imgs/contact-2/Vector (21).svg" alt="Phone / WhatsApp" className="icon" />
          </div>
          <h6>Phone / WhatsApp</h6>
          <p className="text-500">
            <a href="tel:+971585762737" className="contact-link">+971 5857 62737</a> (Office) | <br />
            <a href="https://wa.me/971585762737" target="_blank" className="contact-link">+971 5857 62737</a> (WhatsApp)
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="col-12 col-md-4">
        <div className="feature-item hover-up">
          <div className="icon-container">
            <img src="/assets/imgs/contact-2/Vector (22).svg" alt="Email" className="icon" />
          </div>
          <h6>Email</h6>
          <p className="text-500">
            <a href="mailto:info@dubaiandflip.com" className="contact-link">info@dubaiandflip.com</a>
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* Inline CSS in JSX */}
  <style jsx>{`
    .section-contact-5 {
      padding: 25px 0;
      background-color: #fff;
    }
    .feature-item {
      text-align: center;
      padding: 12px;
    }
    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: #fdf8ed;
      border-radius: 10px;
      margin: 0 auto 6px;
    }
    .icon {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
    h6 {
      font-weight: bold;
      margin-bottom: 3px;
      font-size: 14px;
      color: #653F1C;
    }
    .text-500 {
      font-size: 12px;
      color: #555;
      margin: 0;
    }
    .contact-link {
      color: #653F1C;
      text-decoration: none;
      font-weight: bold;
      font-size: 12px;
    }
    .contact-link:hover {
      text-decoration: underline;
    }
  `}</style>
</section>

				{/* Contact 1*/}
				<section className="section-contact-1 position-relative section-padding">
					<div className="container position-relative z-1">
						<div className="row">
							<div className="col-lg-6">
              <div className="d-flex align-items-center justify-content-center bg-primary-soft-keep border border-2 border-white-keep d-inline-flex rounded-pill px-4 py-2">
  <img src="/assets/imgs/features-1/dotis.png" alt="infinia" />
  <span className="tag-spacing fs-7 fw-bold ms-2 text-uppercase" style={{ color: "#653f1c" }}>
    Contact Us
  </span>
</div>

								<h5 className="ds-5 mt-3 mb-3 text-white">Send Us a Message</h5>
								<span className="fs-5 fw-medium text-white">Please let us know if you have a question, want to leave
a comment, or would like further information about
our process <br className="d-none d-lg-block" />
									Infinia System</span>
								<div className="d-flex pt-6 pb-3 align-items-center">
									<div className="bg-white-keep icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/contact-1/13.png" alt="infinia"         style={{ maxWidth: "55px" }}
 />
										</div>
									</div>
									<div className="ps-5">
										<h6 className="text-white">Curated Property Flips</h6>
										<p className="text-white mb-0">Invest in pre-vetted, high-growth Dubai properties</p>
									</div>
								</div>
								<div className="d-flex pt-3 pb-3 align-items-center">
									<div className="bg-white-keep icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/contact-1/13.png" alt="infinia"         style={{ maxWidth: "55px" }}
 />
										</div>
									</div>
									<div className="ps-5">
										<h6 className="text-white">Rental Income Portfolios</h6>
										<p className="text-white mb-0">
										Earn monthly yields from fully managed rental properties.
										</p>
									</div>
								</div>
								<div className="d-flex pt-3 pb-3 align-items-center">
									<div className="bg-white-keep icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/contact-1/14.png" alt="infinia"        style={{ maxWidth: "55px" }}
 />
                      
										</div>
									</div>
									<div className="ps-5">
										<h6 className="text-white">Automated Flipping</h6>
										<p className="text-white mb-0">
                    Let our team handle renovations, sales, and profit distribution.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 ps-lg-0 pt-5 pt-lg-0">
								<div className="position-relative">
									<div className="position-relative z-2 p-3 p-md-5 p-lg-8 rounded-3 bg-primary">
										<h3 className="text-white">Get in touch</h3>
										<p className="text-white">Do you want to know more or contact our sales department?</p>
										<form action="#">
											<div className="row mt-5">
												<div className="col-md-6">
													<div className="input-group d-flex align-items-center">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Your name *" aria-label="username" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group d-flex align-items-center mt-4 mt-md-0">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="info@" aria-label="email" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group d-flex align-items-center mt-4">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M5.5 6.5L12 12.25L18.5 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Phone" aria-label="phone" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group d-flex align-items-center mt-4">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Subject" aria-label="subject" />
													</div>
												</div>
												<div className="col-12">
													<div className="input-group d-flex mt-4">
														<div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
															<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																<path d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z" fill="white" />
															</svg>
														</div>
														<textarea className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10" name="name" placeholder="Describe Your Project in Short" aria-label="With textarea" />
													</div>
												</div>
												<div className="col-12">
													<button type="submit" className="btn bg-white-keep text-primary hover-up mt-3">
														Send Message
                            <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
    <path d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="#594517" stroke="#594517" />
</svg>
													</button>
												</div>
											</div>
										</form>
									</div>
									<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="contact-map w-100">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.96011341744386!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1685027435635!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
				</div>

			</Layout>
		</>
	)
}
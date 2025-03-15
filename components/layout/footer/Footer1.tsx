import Link from "next/link";

export default function Footer1() {
  return (
    <footer
      style={{
        backgroundColor: "#0F0F0F", // خلفية داكنة
        padding: "60px 0",         // مسافة علوية وسفلية
        position: "relative",
      }}
    >
      <div className="container">
        <div className="row">
          {/* العمود الأيسر: نبذة عن الشركة */}
          <div className="col-lg-4 mb-5">
            <h5 style={{ color: "#fff", marginBottom: "20px" }}>Dubai & Flip</h5>
            <p style={{ color: "#fff", opacity: 0.7, lineHeight: "1.7" }}>
              Dubai & Flip is a pioneering real estate crowdfunding platform
              empowering global investors to own and profit from Dubai’s booming
              property market.
            </p>
          </div>

          {/* العمود الأوسط: الروابط السريعة */}
          <div className="col-lg-4 mb-5">
            <h6
              className="text-uppercase fw-bold"
              style={{ color: "#fff", marginBottom: "20px", fontSize: "14px" }}
            >
              Quick Links
            </h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  href="#"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="#"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none" }}
                >
                  Terms of Service
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="#"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none" }}
                >
                  Key Risks
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="#"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none" }}
                >
                  Disclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الأيمن: المعلومات القانونية وزر CTA */}
          <div className="col-lg-4 mb-5">
            <h6
              className="text-uppercase fw-bold"
              style={{ color: "#fff", marginBottom: "20px", fontSize: "14px" }}
            >
              Legal & Compliance
            </h6>
            <p style={{ color: "#fff", opacity: 0.7, lineHeight: "1.7" }}>
              Dubai & Flip is a registered trading name of Nextbridge Elite
              Expat LLC., regulated under Shams Free Zone.
            </p>
            <Link
              href="#"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #754c24 0%, #d4a82c 100%)",
                color: "#fff",
                borderRadius: "10px",
                padding: "12px 24px",
                marginTop: "10px",
                textDecoration: "none",
              }}
            >
              Claim Your Stake in Dubai
            </Link>
          </div>
        </div>

        {/* الحقوق في الأسفل */}
        <div
          className="row text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}
        >
          <div className="col-12">
            <span style={{ color: "#fff", opacity: 0.7, fontSize: "14px" }}>
              © 2025 Dubai & Flip. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

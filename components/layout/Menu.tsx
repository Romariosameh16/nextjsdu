import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="d-none d-lg-flex">
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
          <li className="nav-item">
            <Link className="nav-link fw-bold d-flex align-items-center" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-1">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

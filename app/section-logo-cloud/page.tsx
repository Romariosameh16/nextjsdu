"use client";

import Link from "next/link";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export default function SectionLogoCloud() {
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Logo cloud</h3>
            <div className="d-flex">
              <Link href="#">
                <p className="mb-0 text-900">Home</p>
              </Link>
              <svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
                <path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-primary mb-0">Logo cloud</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-logo-cloud container-fluid mt-8 mt-lg-0 border-top border-bottom">
        <div className="container">
          <div className="row mask-image">
            <div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
              <ul className="carouselTicker__list">
                <Marquee direction="right">
                  {["1 (2).png", "2 (2).png", "3 (1).png", "4.png", "5.png", "6.png"].map((file, index) => (
                    <li key={index} className="carouselTicker__item">
                      <img src={`/assets/imgs/logo-cloud/${file}`} alt={`logo-${index + 1}`} />
                    </li>
                  ))}
                </Marquee>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

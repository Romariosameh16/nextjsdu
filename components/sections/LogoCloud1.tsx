"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function LogoCloud1() {
  return (
    <>
      <div className="section-logo-cloud container-fluid mt-8 mt-lg-0 border-top border-bottom">
        <div className="container">
          <div className="row mask-image">
            <div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
              <ul className="carouselTicker__list">
                <Marquee gradient={false} speed={50} loop={0}>
                  {Array(3).fill([
                    "1 (2).png", 
                    "2 (2).png", 
                    "3 (1).png", 
                    "4.png", 
                    "5.png", 
                    "6.png"
                  ]).flat().map((file, index) => (
                    <li key={index} className="carouselTicker__item" style={{ display: "inline-block", marginRight: "20px" }}>
                      <img 
                        src={`/assets/imgs/logo-cloud/${file}`} 
                        alt={`logo-${index + 1}`} 
                        style={{ width: "100px", height: "50px", objectFit: "contain" }}
                      />
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
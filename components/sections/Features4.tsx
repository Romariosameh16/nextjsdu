import Link from "next/link";

export default function Features4() {
  return (
    <section className="relative bg-linear-3 py-16">
      <div className="container">
        <div className="text-center mb-8">
          <div
            className="flex items-center justify-center bg-primary-soft inline-flex rounded-full border border-white px-3 py-1"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <img
              src="/assets/imgs/features-1/dotis.png"
              alt="Decorative dots pattern"
              className="w-4 h-4"
            />
            <span className="ml-2 text-xs font-bold uppercase text-linear-2">
              What we offer
            </span>
          </div>
          <h3 className="text-3xl font-light my-3">
            Professional{" "}
            <span
              className="font-bold"
              data-aos="fade-zoom-in"
              data-aos-delay={200}
            >
              UltraHD Video <br className="hidden lg:block" />
              Conferencing
            </span>{" "}
            Platform
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: "/assets/imgs/features-4/icon-1.svg",
              title: "Unified Communications",
            },
            {
              img: "/assets/imgs/features-4/icon-2.svg",
              title: "Team Messenger",
            },
            {
              img: "/assets/imgs/features-4/icon-3.svg",
              title: "Telephony and PBX",
            },
            {
              img: "/assets/imgs/features-4/icon-4.svg",
              title: "Smart Meeting",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all ${
                index % 2 !== 0 ? "mt-6" : ""
              }`}
              data-aos="fade-zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                className="w-12 h-12 mb-3"
                src={feature.img}
                alt={feature.title}
              />
              <h6 className="text-lg font-semibold mb-2">{feature.title}</h6>
              <p className="text-gray-600 mb-4">
                Promptly solve urgent work issues! Create personal and group
                chats that allow for exchanging messages not only during
                conferences but also outside of them.
              </p>
              <Link href="#" className="inline-flex items-center text-blue-600 font-medium">
                <span>Learn More</span>
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={10}
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center items-center gap-5">
          <Link href="#" className="btn btn-gradient">
            Get Free Quote
            <svg
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.25 15.25V6.75H8.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 7L6.75 17.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="#" className="text-blue-600 font-bold underline">
            How We Work
          </Link>
        </div>
      </div>
    </section>
  );
}

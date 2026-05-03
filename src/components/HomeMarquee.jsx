"use client";

import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  const announcements = [
    "New Arrivals: Marble Elegance Tile",
    "Weekly Feature: Modern Geometric Patterns",
    "Join Our Community for Expert Advice",
    "Free Shipping on Orders Over $500",
    "Need Help? Contact Our Design Team Anytime",
  ];

  return (
    <div className="bg-[#012611] text-white text-sm md:text-base font-medium py-3">
      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover={true}
        pauseOnClick={true}
      >
        {announcements.map((item, index) => (
          <span
            key={index}
            className="mx-8 cursor-pointer hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeMarquee;
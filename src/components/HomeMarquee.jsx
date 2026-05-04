"use client";
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  return (
    <div className="bg-[#049c2c] py-2 text-green-500 text-sm text-white font-semibold">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <span className="mx-10">
           New Arrivals: <span className="font-bold">Marble Elegance Tile</span>
        </span>
        <span className="mx-10">
        Weekly Feature: <span className="font-bold">Modern Geometric Patterns</span>
        </span>
        <span className="mx-10">
          Join the Community
        </span>
        <span className="mx-10">
          Free Shipping on Orders Over $500!
        </span>
      </Marquee>
    </div>
  );
};

export default HomeMarquee;

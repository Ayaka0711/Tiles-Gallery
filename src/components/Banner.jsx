import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/banner.png')] h-[50vh] sm:h-[60vh] md:h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">

      <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl text-gray-200">
           Create Designer-Quality Tiles with Just a Few Words
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="/all-tiles">
              <Button className="bg-linear-to-r from-green-900 via-green-600 to-green-900">
                Browse Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
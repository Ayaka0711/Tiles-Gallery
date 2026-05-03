import Link from "next/link";
import TilesCard from "./TilesCard";
import { Button, ButtonGroup } from "@heroui/react";

const FeaturedTiles = async () => {
  const res = await fetch(
    "https://tiles-gallery-ecommerce.vercel.app/data.json",
    { cache: "no-store" },
  );

  const data = await res.json();
  const topTiles = data.tiles.slice(0, 4);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6">Our Best Collections</h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5      
      
      
      bg-white border border-slate-100 rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-shadow duration-300"
      >
        {topTiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>
      <Link href={"/all-tiles"}>
        <Button
          variant="bordered"
          className="ml-5 border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-bold px-8 py-5 rounded-full transition-all duration-300"
        >
          See More
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedTiles;

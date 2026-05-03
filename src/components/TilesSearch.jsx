"use client";
import { useState } from "react";
import TilesCard from "@/components/TilesCard";

const TilesSearch = ({ tiles }) => {
  const [search, setSearch] = useState("");

  const filtered = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-5 mb-6">

      <input
        type="text"
        placeholder="Search tiles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      />

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No tiles found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((tile) => (
          <TilesCard key={tile.id} tile={tile} />
        ))}
      </div>

    </div>
  );
};

export default TilesSearch;
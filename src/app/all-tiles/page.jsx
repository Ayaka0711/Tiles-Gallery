import TilesSearch from "@/components/TilesSearch";

const AllTilesPage = async () => {
  const res = await fetch(
    "https://tiles-gallery-ecommerce.vercel.app/data.json",
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div>
      <h1 className="font-bold m-5 text-2xl">All Tiles</h1>
      <TilesSearch tiles={data.tiles} />
    </div>
  );
};

export default AllTilesPage;
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://tiles-gallery-ecommerce.vercel.app/data.json",
    { cache: "no-store" },
  );
  const data = await res.json();
  const tile = data.tiles.find((p) => p.id == id);

  if (!tile) {
    return <h1 className="text-center mt-10 text-red-500">Tile not found</h1>;
  }

  return (
    <Card>
      <div className="max-w-4xl container mx-auto p-5">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Image
              src={tile.image}
              alt={tile.title}
              width={500}
              height={400}
              className="rounded-lg w-full object-cover"
            />

            <Link href="/contact">
              <button className="bg-blue-400 text-white px-5 py-2 rounded-lg mt-4 hover:bg-blue-400">
                Order Now
              </button>
            </Link>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold">{tile.title}</h1>
            <p className="text-gray-600">{tile.description}</p>

            <p>
              <strong>Category:</strong> {tile.category}
            </p>
            <p>
              <strong>Material:</strong> {tile.material}
            </p>
            <p>
              <strong>Dimensions:</strong> {tile.dimensions}
            </p>

            <p className="text-xl font-semibold">
              {tile.price} {tile.currency}
            </p>

            <p
              className={`font-medium ${
                tile.inStock ? "text-green-600" : "text-red-500"
              }`}
            >
              {tile.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TilseDetailsPage;

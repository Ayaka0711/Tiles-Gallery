
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ tile }) => {
  return (
    <div>
      <Card className="border">
      <div className="relative w-full h-[250px] rounded-lg overflow-hidden border border-gray-200">
      <Image
        src={tile.image}
        alt={tile.title}
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true} 
        className="object-cover"
      />
      <Chip size="large" className="absolute right-2 top-2 bg-white/80 backdrop-blur-md text-slate-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-200 shadow-sm">{tile.category}</Chip>
    </div>
    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-1">{tile.title}</h2>
    </div>
   <div className="flex items-center justify-between">
     <div>
      <p className="text-green-600 font-extrabold text-xl">${tile.price}</p>
    </div>

    <div>
      <Link href={`/all-tiles/${tile.id}`}><Button className="bg-[#0f172a] text-white hover:bg-slate-800 px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium">View Details</Button></Link>
    </div>
    
   </div>

    </Card>
    </div>
  );
};

export default TilesCard;







//  "id": "tile_001",
//       "title": "Oida Ceramic Blue",
//       "description": "Premium glossy blue ceramic tile with authentic texture",
//       "image":"https://images.unsplash.com/photo-1708540084677-dc5838b37627",
//       "category": "ceramic",
//       "price": 45.99,
//       "currency": "USD",
//       "dimensions": "60x60 cm",
//       "material": "Ceramic",
//       "inStock": true
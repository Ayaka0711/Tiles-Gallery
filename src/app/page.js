import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import HomeMarquee from "@/components/HomeMarquee";


export default function HomePage() {
  return (
    <main>
      <HomeMarquee /> 
      <Banner/> 
      
      <div className="container mx-auto px-4">
        <FeaturedTiles />
      </div>
    </main>
  );
}


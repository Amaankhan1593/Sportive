import TopPicksSection from "@/components/TopPicksSection";
import MensShoesSection from "@/components/MensShoesSection";
import WomensOutfitSection from "@/components/WomensOutfitSection";
import Store from "@/components/Store";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <div>
      {/* Top bar */}
      {/* Image just below the header */}
      <div className="-mt-2">
        <Image
          src="/sportive2.jpg"
          width={1920}
          height={1080}
          alt="Main Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Second Image */}
      <div>
        <Image
          src="/sportive3.jpg"
          width={1920}
          height={1080}
          alt="Main Banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
     <TopPicksSection />
      <MensShoesSection />
      <WomensOutfitSection />
      <Store/>
      <TopBrands/>
    </>
  );
}

import TopPicksSection from "@/components/TopPicksSection";
import MensShoesSection from "@/components/MensShoesSection";
import WomensOutfitSection from "@/components/WomensOutfitSection";
import Store from "@/components/Store";
import TopBrands from "@/components/TopBrands";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <div>
      {/* Top bar */}
      {/* Image just below the header */}
      <div className="-mt-2">
        <img
          src="/sportive2.jpg"
          alt="Main Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="">
        <img
          src="/sportive3.jpg"
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

import HeroPreview from "@/components/sections/home/HeroPreview";
import WhatWeDo from "@/components/sections/WhatWeDo";
import TrustedBrands from "@/components/sections/home/TrustedBrands";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPreview />
      <WhatWeDo />
      <TrustedBrands />
    </main>
  );
}
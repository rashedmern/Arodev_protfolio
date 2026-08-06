import HeroPreview from "@/components/sections/home/HeroPreview";
import WhatWeDo from "@/components/sections/WhatWeDo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPreview />
      <WhatWeDo />
    </main>
  );
}
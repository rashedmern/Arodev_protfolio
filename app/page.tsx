import HeroPreview from "@/components/sections/home/HeroPreview";
import WhatWeDo from "@/components/sections/WhatWeDo";
import TrustedBrands from "@/components/sections/home/TrustedBrands";
import SelectedWork from "@/components/sections/home/SelectedWork";
import ClientTestimonials from "@/components/sections/home/ClientTestimonials";
import WhyArodev from "@/components/sections/home/WhyArodev";
import FAQ from "@/components/sections/home/FAQ";
import Footer from "@/components/sections/home/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPreview />
      <WhatWeDo />
      <TrustedBrands />
      <SelectedWork />
      <ClientTestimonials />
      <WhyArodev /> 
      <FAQ />
      <Footer />
    </main>
  );
}
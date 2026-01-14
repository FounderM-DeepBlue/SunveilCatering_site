import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { OriginStory } from "@/components/sections/OriginStory";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { MenuDisplay } from "@/components/sections/MenuDisplay";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans selection:bg-[hsl(var(--color-amber))] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <OriginStory />
        <ProductShowcase />
        <MenuDisplay />
      </main>
      <Footer />
    </div>
  );
}

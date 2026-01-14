import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MenuDisplay } from "@/components/sections/MenuDisplay";

export default function Menu() {
  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
      <Navbar />
      <main className="pt-20">
         <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-5xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6">Our Menu</h1>
            <p className="text-lg text-[hsl(var(--color-moss))]/70 max-w-2xl mx-auto">
              A rotation of seasonal favorites and traditional staples. Prices subject to change based on ingredient availability.
            </p>
         </div>
         <MenuDisplay />
         
         <div className="container mx-auto px-4 py-16 text-center">
            <p className="text-[hsl(var(--color-forest))] font-bold italic text-lg mb-8">
              "We also offer seasonal specials and custom orders."
            </p>
            <a href="/shop" className="inline-block bg-[hsl(var(--color-forest))] text-white px-8 py-3 rounded-full font-bold hover:bg-[hsl(var(--color-deep-forest))] transition-colors shadow-lg">
              Order Online for Delivery
            </a>
         </div>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Filter, Plus } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_somali_pastries_hero_background.png";

const products = [
  { id: 1, name: "Sabaayad", price: 24, category: "Flatbreads", image: heroBg, desc: "Flaky, multi-layered Somali flatbread." },
  { id: 2, name: "Buskud", price: 24, category: "Biscuits", image: heroBg, desc: "Cardamom infused tea biscuits." },
  { id: 3, name: "Zucchini Bread", price: 28, category: "Breads", image: heroBg, desc: "Moist, spiced zucchini loaf." },
  { id: 4, name: "Lemon Poppy Loaf", price: 28, category: "Breads", image: heroBg, desc: "Bright lemon flavor with poppy seeds." },
  { id: 5, name: "Blueberry Muffin", price: 32, category: "Muffins", image: heroBg, desc: "Bursting with fresh blueberries." },
  { id: 6, name: "Apple Cheese Danish", price: 35, category: "Pastries", image: heroBg, desc: "Sweet apple filling with cream cheese." },
];

const categories = ["All", "Flatbreads", "Biscuits", "Breads", "Muffins", "Pastries"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-4">Order for Delivery</h1>
            <p className="text-[hsl(var(--color-moss))]/70">Freshly baked in Atlanta. Delivered to your door.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[hsl(var(--color-border))]">
                  <div className="flex items-center gap-2 mb-4 text-[hsl(var(--color-deep-forest))] font-bold">
                    <Filter className="w-4 h-4" /> Filters
                  </div>
                  <ul className="space-y-2">
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => setSelectedCategory(cat)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === cat ? 'bg-[hsl(var(--color-forest))] text-white' : 'hover:bg-[hsl(var(--color-cream))] text-[hsl(var(--color-moss))]/80'}`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-[hsl(var(--color-border))]">
                    <h4 className="font-bold text-sm mb-3 text-[hsl(var(--color-deep-forest))]">Dietary</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-[hsl(var(--color-moss))]/80 cursor-pointer">
                        <input type="checkbox" className="rounded text-[hsl(var(--color-forest))]" /> Halal
                      </label>
                      <label className="flex items-center gap-2 text-sm text-[hsl(var(--color-moss))]/80 cursor-pointer">
                        <input type="checkbox" className="rounded text-[hsl(var(--color-forest))]" /> Vegetarian
                      </label>
                      <label className="flex items-center gap-2 text-sm text-[hsl(var(--color-moss))]/80 cursor-pointer">
                        <input type="checkbox" className="rounded text-[hsl(var(--color-forest))]" /> Nut-Free
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group bg-white rounded-xl overflow-hidden border border-[hsl(var(--color-border))] shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-[hsl(var(--color-muted))] relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow-sm">
                        ${product.price}/dz
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-[hsl(var(--color-amber))] font-bold uppercase tracking-wider mb-1">{product.category}</div>
                      <h3 className="font-serif font-bold text-xl text-[hsl(var(--color-deep-forest))] mb-2">{product.name}</h3>
                      <p className="text-sm text-[hsl(var(--color-moss))]/70 mb-4 line-clamp-2">{product.desc}</p>
                      
                      <button className="w-full bg-[hsl(var(--color-cream))] hover:bg-[hsl(var(--color-forest))] text-[hsl(var(--color-deep-forest))] hover:text-white border border-[hsl(var(--color-deep-forest))] hover:border-transparent font-bold py-2 rounded-md transition-all flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" /> Add to Box
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Sticky "Build Your Box" Bar (Visual Mockup) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[hsl(var(--color-border))] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-40 transform translate-y-full animate-slide-up-fade-in" style={{ transform: 'none' }}>
           <div className="container mx-auto px-4 flex items-center justify-between">
             <div className="flex items-center gap-4">
               <div className="hidden md:block">
                 <p className="font-bold text-[hsl(var(--color-deep-forest))]">Your Dozen Box</p>
                 <p className="text-xs text-[hsl(var(--color-moss))]">Add items to build your box</p>
               </div>
               <div className="flex gap-1">
                 {[...Array(12)].map((_, i) => (
                   <div key={i} className="w-6 h-8 md:w-8 md:h-10 bg-[hsl(var(--color-muted))] rounded-sm border border-[hsl(var(--color-border))]" />
                 ))}
               </div>
               <span className="font-mono text-sm font-bold ml-2">0/12</span>
             </div>
             <button disabled className="bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] px-6 py-3 rounded-full font-bold cursor-not-allowed">
               Complete Box
             </button>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

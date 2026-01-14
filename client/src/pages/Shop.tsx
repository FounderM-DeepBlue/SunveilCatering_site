import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Filter, Map as MapIcon, Grid, Search } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { ProductCard } from "@/components/ProductCard";
import { DozenBoxBuilder } from "@/components/DozenBoxBuilder";
import { products, locations } from "@/lib/data";
import { cn } from "@/lib/utils";

// Mock Google Maps setup (since we don't have a real API key in this env)
const containerStyle = { width: '100%', height: '100%' };
const center = { lat: 33.7490, lng: -84.3880 }; // Atlanta

export default function Shop() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [boxItems, setBoxItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Categories derived from products
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  // Filtering Logic
  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Box Logic
  const addToBox = (productId: string) => {
    if (boxItems.length < 12) {
      setBoxItems([...boxItems, productId]);
    }
  };

  const removeFromBox = (index: number) => {
    const newItems = [...boxItems];
    newItems.splice(index, 1);
    setBoxItems(newItems);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
      <Navbar />
      
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-serif font-bold text-[hsl(var(--color-deep-forest))]">Order & Discovery</h1>
              <p className="text-[hsl(var(--color-moss))]/70">Find your favorites for delivery or at a local shop.</p>
            </div>
            
            {/* View Toggle */}
            <div className="flex bg-white rounded-lg border border-[hsl(var(--color-border))] p-1 self-start">
              <button 
                onClick={() => setViewMode('grid')}
                className={cn("px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors", viewMode === 'grid' ? "bg-[hsl(var(--color-forest))] text-white" : "text-[hsl(var(--color-moss))] hover:bg-[hsl(var(--color-cream))]")}
              >
                <Grid className="w-4 h-4" /> Menu
              </button>
              <button 
                onClick={() => setViewMode('map')}
                className={cn("px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors", viewMode === 'map' ? "bg-[hsl(var(--color-forest))] text-white" : "text-[hsl(var(--color-moss))] hover:bg-[hsl(var(--color-cream))]")}
              >
                <MapIcon className="w-4 h-4" /> Locations
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-[hsl(var(--color-border))] shadow-sm flex flex-col md:flex-row gap-4 items-center mb-8 sticky top-20 z-30">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--color-moss))]/50" />
              <input 
                type="text" 
                placeholder="Search pastries..." 
                className="w-full pl-9 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-forest))]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                    selectedCategory === cat 
                      ? "bg-[hsl(var(--color-forest))] text-white border-transparent" 
                      : "bg-[hsl(var(--color-cream))] text-[hsl(var(--color-moss))] border-transparent hover:border-[hsl(var(--color-forest))]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex gap-8 h-[calc(100vh-250px)] min-h-[600px]">
            
            {/* Product Grid (Always visible on desktop split, toggled on mobile) */}
            <div className={cn(
              "flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[hsl(var(--color-border))]",
              viewMode === 'map' ? "hidden lg:block lg:w-1/2" : "w-full"
            )}>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToBox={addToBox}
                    isInBox={boxItems.includes(product.id)}
                  />
                ))}
              </div>
            </div>

            {/* Map View (Visible on toggle or split screen) */}
            <div className={cn(
              "bg-[hsl(var(--color-muted))] rounded-xl overflow-hidden relative",
              viewMode === 'grid' ? "hidden lg:block lg:w-1/2 sticky top-40 h-[600px]" : "w-full h-full"
            )}>
              {/* Fallback for no API key */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[hsl(var(--color-cream))] p-8 text-center">
                 <MapIcon className="w-12 h-12 text-[hsl(var(--color-forest))] mb-4 opacity-50" />
                 <h3 className="font-bold text-lg text-[hsl(var(--color-deep-forest))]">Interactive Map</h3>
                 <p className="text-sm text-[hsl(var(--color-moss))]/70 max-w-xs mb-8">
                   Explore our partner locations across Atlanta. Filter products to see availability near you.
                 </p>
                 
                 {/* Mock Locations List */}
                 <div className="w-full max-w-sm space-y-3 text-left">
                   {locations.map(loc => (
                     <div key={loc.id} className="bg-white p-4 rounded-lg border border-[hsl(var(--color-border))] shadow-sm hover:border-[hsl(var(--color-forest))] cursor-pointer transition-colors">
                       <div className="flex justify-between">
                         <h4 className="font-bold text-[hsl(var(--color-deep-forest))]">{loc.name}</h4>
                         <span className="text-xs bg-[hsl(var(--color-cream))] px-2 py-1 rounded text-[hsl(var(--color-moss))]">{loc.type}</span>
                       </div>
                       <p className="text-xs text-[hsl(var(--color-moss))]/70 mt-1">{loc.address}</p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Box Builder */}
        <DozenBoxBuilder 
          items={boxItems} 
          products={products}
          onRemoveItem={removeFromBox}
          onClearBox={() => setBoxItems([])}
        />
        
      </main>
    </div>
  );
}

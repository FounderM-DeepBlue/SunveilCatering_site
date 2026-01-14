import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Filter, Map as MapIcon, Grid, Search, ShoppingBag } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { DozenBoxBuilder } from "@/components/DozenBoxBuilder";
import { products, locations } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useCart, CartItem } from "@/lib/CartContext";

export default function Shop() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [boxItems, setBoxItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Cart State from Context
  const { cart, addToCart, setIsCartOpen } = useCart();

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

  const completeBox = () => {
    if (boxItems.length === 12) {
      const newBox: CartItem = {
        id: `box-${Date.now()}`,
        type: 'box',
        items: [...boxItems],
        quantity: 1
      };
      addToCart(newBox);
      setBoxItems([]);
    }
  };

  // Cart Logic
  const addDozenToCart = (productId: string) => {
    const newDozen: CartItem = {
      id: `dozen-${Date.now()}`,
      type: 'dozen',
      productId: productId,
      quantity: 1
    };
    addToCart(newDozen);
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
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="fixed bottom-24 right-4 z-50 md:static md:z-auto bg-[hsl(var(--color-forest))] text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-[hsl(var(--color-deep-forest))] transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
            </button>
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
            
            {/* Product Grid */}
            <div className="w-full flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[hsl(var(--color-border))]">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToBox={addToBox}
                    onAddDozen={addDozenToCart}
                    isInBox={boxItems.includes(product.id)}
                  />
                ))}
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
          onCompleteBox={completeBox}
        />
        
      </main>
    </div>
  );
}

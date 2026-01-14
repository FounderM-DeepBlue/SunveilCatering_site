import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "wouter";
import { products as allProducts } from "@/lib/data";

// Select specific signature items for the showcase
const showcaseIds = ["peach-cobbler-cinnamon-rolls", "blueberry-lavender-muffin", "zucchini-bread"];
const showcaseProducts = showcaseIds.map(id => allProducts.find(p => p.id === id)).filter(Boolean);

export function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-4">
            Our Signature Pastries
          </h2>
          <p className="text-[hsl(var(--color-moss))]/70 text-lg">
            Handcrafted daily with love and tradition
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseProducts.map((product, index) => {
            if (!product) return null;
            return (
            <Link key={product.id} href="/shop">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer h-full flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-[hsl(var(--color-muted))]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Signature Badge */}
                  <div className="absolute top-4 right-4 bg-[hsl(var(--color-amber))] text-[hsl(var(--color-deep-forest))] text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                    ★ Signature
                  </div>
                  
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="bg-white text-[hsl(var(--color-forest))] px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                       <Plus className="w-4 h-4" /> Order Now
                     </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[hsl(var(--color-deep-forest))] group-hover:text-[hsl(var(--color-forest))] transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-lg text-[hsl(var(--color-deep-forest))]">${product.price}</span>
                    <span className="text-xs text-muted-foreground">{product.unitLabel}</span>
                  </div>
                </div>
                <p className="text-[hsl(var(--color-moss))]/70 leading-snug">
                  {product.description}
                </p>
              </motion.div>
            </Link>
          )})}
        </div>

        <div className="text-center mt-16">
          <Link href="/shop">
            <a className="inline-block text-[hsl(var(--color-deep-forest))] font-bold text-lg border border-[hsl(var(--color-deep-forest))] px-8 py-3 rounded-full hover:bg-[hsl(var(--color-deep-forest))] hover:text-white transition-all duration-300">
              View Full Menu
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

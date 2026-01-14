import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_somali_pastries_hero_background.png"; // Placeholder for product images

// Mock Data
const products = [
  {
    id: 1,
    name: "Sabaayad",
    subName: "Somali Flatbread",
    price: 24.00,
    unit: "per dozen",
    image: heroBg, // In real app, would be specific image
    desc: "Flaky, multi-layered flatbread pan-fried to golden perfection."
  },
  {
    id: 2,
    name: "Buskud",
    subName: "Cardamom Biscuits",
    price: 24.00,
    unit: "per dozen",
    image: heroBg,
    desc: "Buttery, crumbly biscuits infused with aromatic cardamom."
  },
  {
    id: 3,
    name: "Fusion Pastries",
    subName: "East Meets West",
    price: 28.00,
    unit: "assorted box",
    image: heroBg,
    desc: "Traditional Somali flavors with modern pastry techniques."
  }
];

export function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-4">
            Our Signature Pastries
          </h2>
          <p className="text-[hsl(var(--color-moss))]/70 text-lg">
            Handcrafted daily in small batches. Order by the dozen for delivery or find us at local partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-[hsl(var(--color-muted))]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <button className="bg-white text-[hsl(var(--color-forest))] px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                     <Plus className="w-4 h-4" /> Add to Box
                   </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[hsl(var(--color-deep-forest))] group-hover:text-[hsl(var(--color-forest))] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[hsl(var(--color-amber))] font-medium text-sm">{product.subName}</p>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-lg text-[hsl(var(--color-deep-forest))]">${product.price}</span>
                  <span className="text-xs text-muted-foreground">{product.unit}</span>
                </div>
              </div>
              <p className="text-[hsl(var(--color-moss))]/70 leading-snug">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="text-[hsl(var(--color-deep-forest))] font-bold text-lg border border-[hsl(var(--color-deep-forest))] px-8 py-3 rounded-full hover:bg-[hsl(var(--color-deep-forest))] hover:text-white transition-all duration-300">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}

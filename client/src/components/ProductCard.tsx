import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: any;
  onAddToBox: (id: string) => void;
  onAddDozen: (id: string) => void;
  isInBox?: boolean;
}

export function ProductCard({ product, onAddToBox, onAddDozen, isInBox = false }: ProductCardProps) {
  const [isAddedToBox, setIsAddedToBox] = useState(false);
  const [isAddedDozen, setIsAddedDozen] = useState(false);

  const handleAddToBox = () => {
    setIsAddedToBox(true);
    onAddToBox(product.id);
    setTimeout(() => setIsAddedToBox(false), 1000);
  };

  const handleAddDozen = () => {
    setIsAddedDozen(true);
    onAddDozen(product.id);
    setTimeout(() => setIsAddedDozen(false), 1000);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-xl overflow-hidden border border-[hsl(var(--color-border))] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="aspect-square relative overflow-hidden bg-[hsl(var(--color-muted))]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Availability Badge */}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow-sm">
          ${product.price}/{product.unit === 'loaf' ? 'loaf' : 'dz'}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2 bg-[hsl(var(--color-deep-forest))]/90 backdrop-blur text-[hsl(var(--color-cream))] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          {product.category}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-serif font-bold text-lg leading-tight text-[hsl(var(--color-deep-forest))] group-hover:text-[hsl(var(--color-forest))] transition-colors">
              {product.name}
            </h3>
          </div>
          
          {product.somaliName && (
            <p className="text-sm font-medium text-[hsl(var(--color-amber))] mb-2">
              "{product.somaliName}"
            </p>
          )}
          
          <p className="text-sm text-[hsl(var(--color-moss))]/70 mb-4 line-clamp-2">
            {product.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.tags?.map((tag: string) => (
              <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-[hsl(var(--color-cream))] border border-[hsl(var(--color-border))] rounded text-[hsl(var(--color-moss))]/60">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mt-auto">
          {/* Add to Mixed Box Button - Only for non-loaf items */}
          {product.unit !== 'loaf' && (
            <motion.button
              onClick={handleAddToBox}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "w-full font-bold py-2 rounded-md transition-all flex items-center justify-center gap-2 text-sm",
                isAddedToBox || isInBox
                  ? "bg-[hsl(var(--color-cream))] text-[hsl(var(--color-forest))] border border-[hsl(var(--color-forest))]"
                  : "bg-white text-[hsl(var(--color-deep-forest))] border border-[hsl(var(--color-deep-forest))] hover:bg-[hsl(var(--color-cream))]"
              )}
            >
              {isAddedToBox ? (
                 <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Added to Box</span>
              ) : (
                 <span className="flex items-center gap-2"><Plus className="w-4 h-4" /> Add to Mixed Box</span>
              )}
            </motion.button>
          )}

          {/* Add Full Dozen/Loaf Button */}
          <motion.button
            onClick={handleAddDozen}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "w-full font-bold py-2 rounded-md transition-all flex items-center justify-center gap-2 text-sm",
              isAddedDozen
                ? "bg-[hsl(var(--color-forest))] text-white"
                : "bg-[hsl(var(--color-deep-forest))] text-white hover:bg-[hsl(var(--color-forest))]"
            )}
          >
            {isAddedDozen ? (
               <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Added {product.unit === 'loaf' ? 'Loaf' : 'Dozen'}</span>
            ) : (
               <span className="flex items-center gap-2">Add {product.unit === 'loaf' ? 'Loaf' : 'Dozen'} (${product.price})</span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

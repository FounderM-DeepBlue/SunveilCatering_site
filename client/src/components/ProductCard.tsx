import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: any;
  onAddToBox: (id: string) => void;
  isInBox?: boolean;
}

export function ProductCard({ product, onAddToBox, isInBox = false }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    onAddToBox(product.id);
    
    // Reset "Added" state after 2 seconds so user can add more
    setTimeout(() => setIsAdded(false), 2000);
  };

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
          ${product.price}/dz
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2 bg-[hsl(var(--color-deep-forest))]/90 backdrop-blur text-[hsl(var(--color-cream))] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
          {product.category}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-serif font-bold text-xl text-[hsl(var(--color-deep-forest))] group-hover:text-[hsl(var(--color-forest))] transition-colors">
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
        
        <motion.button
          onClick={handleAdd}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "w-full font-bold py-2.5 rounded-md transition-all flex items-center justify-center gap-2 relative overflow-hidden",
            isAdded || isInBox
              ? "bg-[hsl(var(--color-forest))] text-white border-transparent"
              : "bg-white text-[hsl(var(--color-deep-forest))] border border-[hsl(var(--color-deep-forest))] hover:bg-[hsl(var(--color-deep-forest))] hover:text-white"
          )}
        >
          <AnimatePresence mode="wait">
            {isAdded || isInBox ? (
              <motion.span
                key="added"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Check className="w-4 h-4" /> Added to Box
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add to Box
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}

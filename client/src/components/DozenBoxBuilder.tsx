import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Package } from "lucide-react";
import confetti from "canvas-confetti";

interface DozenBoxBuilderProps {
  items: any[];
  products: any[];
  onRemoveItem: (index: number) => void;
  onClearBox: () => void;
}

export function DozenBoxBuilder({ items, products, onRemoveItem, onClearBox }: DozenBoxBuilderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const maxItems = 12;
  const currentCount = items.length;
  const isComplete = currentCount === maxItems;
  const progress = (currentCount / maxItems) * 100;

  useEffect(() => {
    if (isComplete) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2d5f3b', '#ba8919', '#ffffff']
      });
    }
  }, [isComplete]);

  // If empty, hide (unless specifically toggled, but for MVP we auto-hide)
  if (currentCount === 0 && !isOpen) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none">
        <div className="container mx-auto max-w-4xl pointer-events-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-t-xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] border border-[hsl(var(--color-border))] overflow-hidden"
          >
            {/* Header / Progress Bar */}
            <div 
              className="bg-[hsl(var(--color-cream))] p-4 flex items-center justify-between cursor-pointer border-b border-[hsl(var(--color-border))]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="relative">
                  <Package className={cn("w-6 h-6", isComplete ? "text-[hsl(var(--color-amber))]" : "text-[hsl(var(--color-forest))]")} />
                  {currentCount > 0 && (
                     <span className="absolute -top-1 -right-1 flex h-3 w-3">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--color-amber))] opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-3 w-3 bg-[hsl(var(--color-amber))]"></span>
                     </span>
                  )}
                </div>
                
                <div className="flex-1 max-w-md">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1">
                     <span>Your Dozen Box</span>
                     <span className={isComplete ? "text-[hsl(var(--color-forest))]" : ""}>{currentCount} / {maxItems}</span>
                   </div>
                   <div className="h-2 w-full bg-[hsl(var(--color-border))] rounded-full overflow-hidden">
                     <motion.div 
                       className="h-full bg-[hsl(var(--color-forest))]"
                       initial={{ width: 0 }}
                       animate={{ width: `${progress}%` }}
                       transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                     />
                   </div>
                </div>
              </div>

              <div className="ml-4">
                 {isComplete ? (
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-[hsl(var(--color-forest))] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
                   >
                     Complete Box <CheckCircle className="w-4 h-4" />
                   </motion.button>
                 ) : (
                   <span className="text-xs text-[hsl(var(--color-moss))]/60 hidden sm:inline-block">
                     Add {maxItems - currentCount} more items
                   </span>
                 )}
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="bg-white"
                >
                  <div className="p-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 max-h-[200px] overflow-y-auto">
                    {items.map((itemId, index) => {
                      const product = products.find(p => p.id === itemId);
                      if (!product) return null;
                      
                      return (
                        <motion.div
                          key={`${itemId}-${index}`}
                          layout
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="aspect-square relative group rounded-md overflow-hidden border border-[hsl(var(--color-border))]"
                        >
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          <button 
                            onClick={(e) => { e.stopPropagation(); onRemoveItem(index); }}
                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </motion.div>
                      );
                    })}
                    
                    {/* Empty Slots */}
                    {[...Array(maxItems - currentCount)].map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square rounded-md border-2 border-dashed border-[hsl(var(--color-border))] bg-[hsl(var(--color-cream))]/30 flex items-center justify-center opacity-50">
                        <span className="text-[hsl(var(--color-border))] font-bold text-xs">{currentCount + i + 1}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-2 border-t border-[hsl(var(--color-border))] flex justify-center">
                    <button 
                      onClick={onClearBox}
                      className="text-xs text-[hsl(var(--color-destructive))] hover:underline"
                    >
                      Clear Box
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

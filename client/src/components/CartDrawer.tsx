import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useLocation } from "wouter";
import { products } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen } = useCart();
  const [_, setLocation] = useLocation();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate total price (Mock logic)
  // Boxes are flat $28 (avg), Dozens are product price
  const totalPrice = cart.reduce((sum, item) => {
    if (item.type === 'box') {
      return sum + (28 * item.quantity); 
    } else if (item.productId) {
      const product = products.find(p => p.id === item.productId);
      return sum + ((product?.price || 0) * item.quantity);
    }
    return sum;
  }, 0);

  const onClose = () => setIsCartOpen(false);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[60] w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b border-[hsl(var(--color-border))] flex items-center justify-between bg-[hsl(var(--color-cream))]">
              <h2 className="font-serif font-bold text-xl text-[hsl(var(--color-deep-forest))] flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Your Cart
                <span className="text-sm font-sans font-normal bg-[hsl(var(--color-forest))] text-white px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              </h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-[hsl(var(--color-deep-forest))]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag className="w-16 h-16 mb-4 text-[hsl(var(--color-border))]" />
                  <p className="text-lg font-bold text-[hsl(var(--color-deep-forest))]">Your cart is empty</p>
                  <p className="text-sm">Start adding dozens or build a box!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="bg-white border border-[hsl(var(--color-border))] rounded-lg p-4 shadow-sm relative group">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-2 right-2 p-1 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-destructive))] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    {item.type === 'box' ? (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                           <h3 className="font-bold text-[hsl(var(--color-deep-forest))]">Mixed Dozen Box</h3>
                           <div className="flex items-center gap-2">
                             <span className="text-xs bg-[hsl(var(--color-forest))] text-white px-2 py-0.5 rounded-full">
                               Qty: {item.quantity}
                             </span>
                             <span className="font-bold text-[hsl(var(--color-forest))]">$28.00</span>
                           </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.items?.map((pid, idx) => {
                             const p = products.find(prod => prod.id === pid);
                             return (
                               <img 
                                 key={idx} 
                                 src={p?.image} 
                                 alt={p?.name}
                                 className="w-8 h-8 rounded object-cover border border-[hsl(var(--color-border))]" 
                                 title={p?.name}
                               />
                             );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        {(() => {
                          const product = products.find(p => p.id === item.productId);
                          return (
                            <>
                              <img src={product?.image} className="w-16 h-16 rounded-md object-cover bg-[hsl(var(--color-muted))]" />
                              <div>
                                <h3 className="font-bold text-[hsl(var(--color-deep-forest))]">{product?.name}</h3>
                                <p className="text-xs text-[hsl(var(--color-moss))] mb-1">
                                  {product?.unitLabel === 'per loaf' ? '1 Loaf' : '1 Dozen'}
                                </p>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs bg-[hsl(var(--color-forest))] text-white px-2 py-0.5 rounded-full">
                                    Qty: {item.quantity}
                                  </span>
                                  <div className="font-bold text-[hsl(var(--color-forest))]">
                                    ${product?.price}.00
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-cream))]">
               <div className="flex justify-between items-center mb-4 text-lg font-bold text-[hsl(var(--color-deep-forest))]">
                 <span>Subtotal</span>
                 <span>${totalPrice.toFixed(2)}</span>
               </div>
               <button 
                 onClick={() => {
                   onClose();
                   setLocation('/checkout');
                 }}
                 className="w-full bg-[hsl(var(--color-forest))] text-white font-bold py-3 rounded-md hover:bg-[hsl(var(--color-deep-forest))] transition-colors shadow-lg">
                 Checkout
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingBag, Truck, Store, Calendar, ArrowRight, Plus } from "lucide-react";
import { products } from "@/lib/data";
import cateringHero from "@assets/generated_images/elegant_catering_event_setup.png";
import { cn } from "@/lib/utils";

// Types
type InquiryType = 'catering' | 'wholesale';
type UnitType = 'dozen' | 'case';

interface CartItem {
  productId: string;
  quantity: number;
  unit: UnitType;
}

export default function Catering() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('catering');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter products relevant for catering/wholesale
  // (For this mock, we assume all products are available)
  const availableProducts = products;

  const addToCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item => 
          item.productId === productId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { productId, quantity: 1, unit: inquiryType === 'catering' ? 'dozen' : 'case' }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.productId === productId) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={cateringHero} alt="Catering" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Partner with Sunveil
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Bring Somali tradition to your events, cafés, and retail shelves.
            </p>
            
            {/* Inquiry Type Toggle */}
            <div className="inline-flex bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20">
              <button
                onClick={() => setInquiryType('catering')}
                className={cn(
                  "px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2",
                  inquiryType === 'catering' 
                    ? "bg-[hsl(var(--color-amber))] text-[hsl(var(--color-deep-forest))]" 
                    : "text-white hover:bg-white/10"
                )}
              >
                <Truck className="w-4 h-4" /> Event Catering
              </button>
              <button
                onClick={() => setInquiryType('wholesale')}
                className={cn(
                  "px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2",
                  inquiryType === 'wholesale' 
                    ? "bg-[hsl(var(--color-amber))] text-[hsl(var(--color-deep-forest))]" 
                    : "text-white hover:bg-white/10"
                )}
              >
                <Store className="w-4 h-4" /> Wholesale
              </button>
            </div>
          </div>
        </section>

        {isSubmitted ? (
           <SuccessView />
        ) : (
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Main Content Area */}
              <div className="lg:col-span-2">
                {step === 1 && (
                  <ProductSelectionStep 
                    products={availableProducts} 
                    cart={cart} 
                    addToCart={addToCart}
                    updateQuantity={updateQuantity}
                    inquiryType={inquiryType}
                    onNext={() => setStep(2)}
                  />
                )}
                
                {step === 2 && (
                   <DetailsFormStep 
                     inquiryType={inquiryType}
                     onBack={() => setStep(1)}
                     onSubmit={handleSubmit}
                   />
                )}
              </div>

              {/* Sidebar Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white p-6 rounded-xl border border-[hsl(var(--color-border))] shadow-sm">
                  <h3 className="font-serif font-bold text-xl text-[hsl(var(--color-deep-forest))] mb-4 flex items-center justify-between">
                    Your Inquiry
                    <span className="text-sm font-sans font-normal bg-[hsl(var(--color-cream))] px-2 py-1 rounded">
                      {totalItems} {inquiryType === 'catering' ? 'Dozens' : 'Cases'}
                    </span>
                  </h3>
                  
                  {cart.length === 0 ? (
                    <p className="text-[hsl(var(--color-moss))]/60 text-sm italic py-8 text-center border-dashed border-2 border-[hsl(var(--color-border))] rounded-lg">
                      Start adding items to build your inquiry
                    </p>
                  ) : (
                    <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                      {cart.map(item => {
                        const product = products.find(p => p.id === item.productId);
                        if (!product) return null;
                        return (
                          <div key={item.productId} className="flex gap-3 items-center">
                            <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover bg-[hsl(var(--color-muted))]" />
                            <div className="flex-1">
                              <p className="font-bold text-sm text-[hsl(var(--color-deep-forest))]">{product.name}</p>
                              <p className="text-xs text-[hsl(var(--color-moss))]">
                                {inquiryType === 'catering' 
                                  ? `Min: ${product.cateringMinimum} ${product.cateringUnit}` 
                                  : 'Case of 6 units'}
                              </p>
                            </div>
                            <div className="font-mono font-bold text-[hsl(var(--color-forest))]">
                              x{item.quantity}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="space-y-3 pt-4 border-t border-[hsl(var(--color-border))]">
                    <div className="flex justify-between text-sm">
                      <span className="text-[hsl(var(--color-moss))]">Estimated Response</span>
                      <span className="font-medium">24-48 Hours</span>
                    </div>
                    {step === 1 && cart.length > 0 && (
                      <button 
                        onClick={() => setStep(2)}
                        className="w-full bg-[hsl(var(--color-forest))] text-white font-bold py-3 rounded-md hover:bg-[hsl(var(--color-deep-forest))] transition-colors flex items-center justify-center gap-2"
                      >
                        Continue to Details <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

// Sub-components

function ProductSelectionStep({ products, cart, addToCart, updateQuantity, inquiryType, onNext }: any) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-2">Build Your Selection</h2>
        <p className="text-[hsl(var(--color-moss))]/70">
          Select the items you're interested in. 
          {inquiryType === 'catering' ? ' Min quantities apply.' : ' Quantities are in wholesale cases.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {products.map((product: any) => {
          const cartItem = cart.find((item: any) => item.productId === product.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <div key={product.id} className="bg-white p-4 rounded-xl border border-[hsl(var(--color-border))] shadow-sm flex gap-4">
              <div className="w-24 h-24 flex-shrink-0 bg-[hsl(var(--color-muted))] rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                   <h3 className="font-bold text-[hsl(var(--color-deep-forest))]">{product.name}</h3>
                   <p className="text-xs text-[hsl(var(--color-moss))]/70 line-clamp-2">{product.desc}</p>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                   {quantity === 0 ? (
                     <button 
                       onClick={() => addToCart(product.id)}
                       className="text-sm font-bold text-[hsl(var(--color-forest))] hover:text-[hsl(var(--color-amber))] transition-colors flex items-center gap-1"
                     >
                       <Plus className="w-4 h-4" /> Add to Inquiry
                     </button>
                   ) : (
                     <div className="flex items-center gap-3 bg-[hsl(var(--color-cream))] rounded-md px-2 py-1">
                       <button onClick={() => updateQuantity(product.id, -1)} className="text-[hsl(var(--color-deep-forest))] hover:text-[hsl(var(--color-destructive))]">-</button>
                       <span className="font-mono text-sm font-bold w-4 text-center">{quantity}</span>
                       <button onClick={() => updateQuantity(product.id, 1)} className="text-[hsl(var(--color-deep-forest))] hover:text-[hsl(var(--color-forest))]">+</button>
                     </div>
                   )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-end">
         <button 
            onClick={onNext}
            disabled={cart.length === 0}
            className="bg-[hsl(var(--color-forest))] text-white font-bold py-3 px-8 rounded-full disabled:opacity-50 hover:bg-[hsl(var(--color-deep-forest))] transition-colors flex items-center gap-2"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
      </div>
    </div>
  );
}

function DetailsFormStep({ inquiryType, onBack, onSubmit }: any) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
      <div>
        <h2 className="text-3xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-2">Event & Contact Details</h2>
        <p className="text-[hsl(var(--color-moss))]/70">Tell us a bit more about your needs so we can provide an accurate quote.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Conditional Fields Based on Inquiry Type */}
        <div className="bg-white p-6 rounded-xl border border-[hsl(var(--color-border))] space-y-4">
           <h3 className="font-bold text-lg text-[hsl(var(--color-deep-forest))] border-b border-[hsl(var(--color-border))] pb-2">
             {inquiryType === 'catering' ? 'Event Information' : 'Business Information'}
           </h3>
           
           {inquiryType === 'catering' ? (
             <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-sm font-medium">Event Date</label>
                 <div className="relative">
                   <Calendar className="absolute left-3 top-3 w-4 h-4 text-[hsl(var(--color-moss))]" />
                   <input type="date" required className="w-full pl-10 pr-4 py-2 border rounded-md" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Guest Count (Approx)</label>
                 <input type="number" placeholder="e.g. 50" className="w-full px-4 py-2 border rounded-md" />
               </div>
               <div className="space-y-2 md:col-span-2">
                 <label className="text-sm font-medium">Event Location / Venue</label>
                 <input type="text" placeholder="Address or City" className="w-full px-4 py-2 border rounded-md" />
               </div>
             </div>
           ) : (
             <div className="grid md:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-sm font-medium">Business Type</label>
                 <select className="w-full px-4 py-2 border rounded-md">
                   <option>Café / Coffee Shop</option>
                   <option>Restaurant</option>
                   <option>Grocery / Market</option>
                   <option>Other</option>
                 </select>
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Estimated Volume</label>
                 <select className="w-full px-4 py-2 border rounded-md">
                   <option>Weekly</option>
                   <option>Bi-Weekly</option>
                   <option>Monthly</option>
                   <option>One-time</option>
                 </select>
               </div>
             </div>
           )}
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl border border-[hsl(var(--color-border))] space-y-4">
           <h3 className="font-bold text-lg text-[hsl(var(--color-deep-forest))] border-b border-[hsl(var(--color-border))] pb-2">
             Contact Information
           </h3>
           <div className="grid md:grid-cols-2 gap-4">
             <div className="space-y-2">
               <label className="text-sm font-medium">Contact Name</label>
               <input type="text" required className="w-full px-4 py-2 border rounded-md" />
             </div>
             <div className="space-y-2">
               <label className="text-sm font-medium">Business Name (Optional)</label>
               <input type="text" className="w-full px-4 py-2 border rounded-md" />
             </div>
             <div className="space-y-2">
               <label className="text-sm font-medium">Email Address</label>
               <input type="email" required className="w-full px-4 py-2 border rounded-md" />
             </div>
             <div className="space-y-2">
               <label className="text-sm font-medium">Phone Number</label>
               <input type="tel" required className="w-full px-4 py-2 border rounded-md" />
             </div>
             <div className="space-y-2 md:col-span-2">
               <label className="text-sm font-medium">Additional Notes</label>
               <textarea rows={3} className="w-full px-4 py-2 border rounded-md" placeholder="Any special requests or dietary restrictions?"></textarea>
             </div>
           </div>
        </div>

        <div className="flex justify-between pt-4">
          <button 
            type="button"
            onClick={onBack}
            className="text-[hsl(var(--color-deep-forest))] font-medium hover:underline"
          >
            Back to Selection
          </button>
          <button 
            type="submit"
            className="bg-[hsl(var(--color-forest))] text-white font-bold py-3 px-8 rounded-full hover:bg-[hsl(var(--color-deep-forest))] transition-colors shadow-lg"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
}

function SuccessView() {
  return (
    <div className="container mx-auto px-4 py-24 text-center animate-in zoom-in duration-500">
      <div className="w-24 h-24 bg-[hsl(var(--color-cream))] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-[hsl(var(--color-forest))]">
        <Check className="w-12 h-12 text-[hsl(var(--color-forest))]" />
      </div>
      <h2 className="text-4xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-4">Inquiry Received!</h2>
      <p className="text-xl text-[hsl(var(--color-moss))]/70 max-w-lg mx-auto mb-8">
        Thank you for choosing Sunveil Catering. We've received your request and will get back to you with a quote within 24-48 hours.
      </p>
      <div className="bg-white p-6 rounded-lg border border-[hsl(var(--color-border))] inline-block text-left max-w-md w-full mb-8">
        <p className="text-xs text-[hsl(var(--color-moss))] uppercase tracking-wider font-bold mb-2">Reference Number</p>
        <p className="font-mono text-2xl font-bold text-[hsl(var(--color-forest))]">CAT-{new Date().getFullYear()}-0042</p>
      </div>
      <div>
        <a href="/" className="text-[hsl(var(--color-forest))] font-bold hover:underline">Return to Home</a>
      </div>
    </div>
  );
}

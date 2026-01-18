import { useState } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/lib/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/data";
import { ArrowLeft, CreditCard, Apple, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { cart, totalItems } = useCart();
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => {
    // For now assuming all items (boxes and dozens) are same price or based on logic
    // You might need to adjust this based on your actual pricing model
    return acc + (item.quantity * 45); // Assuming $45 per dozen/box for mockup
  }, 0);
  
  const shippingCost = deliveryMethod === 'delivery' ? 15 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + tax + shippingCost;

  const handlePayment = (method: string) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order Placed Successfully!",
        description: `Thank you for your order. Paid with ${method}.`,
      });
      // Here you would clear cart and redirect to success page
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
        <Navbar />
        <main className="pt-32 pb-32 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6">Your cart is empty</h1>
          <Button 
            onClick={() => setLocation('/shop')}
            className="bg-[hsl(var(--color-forest))] text-white hover:bg-[hsl(var(--color-deep-forest))]"
          >
            Return to Shop
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
      <Navbar />
      
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="ghost" 
            className="mb-8 pl-0 text-[hsl(var(--color-moss))] hover:text-[hsl(var(--color-forest))] hover:bg-transparent"
            onClick={() => setLocation('/shop')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-2">Checkout</h1>
                <p className="text-[hsl(var(--color-moss))]">Complete your order details below.</p>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-xl border border-[hsl(var(--color-border))] space-y-4">
                <h2 className="text-xl font-serif font-bold text-[hsl(var(--color-deep-forest))]">Contact Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Jane" />
                  </div>
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 555-5555" />
                  </div>
                </div>
              </div>

              {/* Delivery/Pickup */}
              <div className="bg-white p-6 rounded-xl border border-[hsl(var(--color-border))] space-y-4">
                <h2 className="text-xl font-serif font-bold text-[hsl(var(--color-deep-forest))]">Delivery Method</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    onClick={() => setDeliveryMethod('pickup')}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      deliveryMethod === 'pickup' 
                        ? 'bg-[hsl(var(--color-cream))]/30 border-[hsl(var(--color-forest))] ring-1 ring-[hsl(var(--color-forest))]' 
                        : 'border-gray-200 hover:border-[hsl(var(--color-forest))]'
                    }`}
                  >
                    <div className="font-bold text-[hsl(var(--color-deep-forest))]">Pickup</div>
                    <div className="text-sm text-[hsl(var(--color-moss))]">Free</div>
                  </div>
                  <div 
                    onClick={() => setDeliveryMethod('delivery')}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      deliveryMethod === 'delivery' 
                        ? 'bg-[hsl(var(--color-cream))]/30 border-[hsl(var(--color-forest))] ring-1 ring-[hsl(var(--color-forest))]' 
                        : 'border-gray-200 hover:border-[hsl(var(--color-forest))]'
                    }`}
                  >
                    <div className="font-bold text-[hsl(var(--color-deep-forest))]">Delivery</div>
                    <div className="text-sm text-[hsl(var(--color-moss))]">$15.00</div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white p-6 rounded-xl border border-[hsl(var(--color-border))] space-y-6">
                <h2 className="text-xl font-serif font-bold text-[hsl(var(--color-deep-forest))]">Payment</h2>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full h-12 bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2 text-lg font-medium"
                    onClick={() => handlePayment('Apple Pay')}
                    disabled={isProcessing}
                  >
                    {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                      <>
                        <Apple className="w-5 h-5 mb-0.5" /> Apple Pay
                      </>
                    )}
                  </Button>

                  <Button 
                    className="w-full h-12 bg-white text-black border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 text-lg font-medium"
                    onClick={() => handlePayment('Google Pay')}
                    disabled={isProcessing}
                  >
                    {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-blue-500">G</span>
                        <span className="font-bold text-red-500">o</span>
                        <span className="font-bold text-yellow-500">o</span>
                        <span className="font-bold text-blue-500">g</span>
                        <span className="font-bold text-green-500">l</span>
                        <span className="font-bold text-red-500">e</span>
                        <span className="ml-1 text-gray-600">Pay</span>
                      </div>
                    )}
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-muted-foreground">Or pay with card</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full h-12 bg-[hsl(var(--color-forest))] text-white hover:bg-[hsl(var(--color-deep-forest))]"
                    onClick={() => handlePayment('Credit Card')}
                    disabled={isProcessing}
                  >
                     {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : "Pay with Credit Card"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white p-6 rounded-xl border border-[hsl(var(--color-border))] shadow-sm">
                <h2 className="text-xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6">Order Summary</h2>
                
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin mb-6">
                  {cart.map((item) => {
                    // Determine image logic
                    let imageSrc = null;
                    if (item.type === 'box' && item.items && item.items.length > 0) {
                      // For box, use the first item's image
                      const firstProduct = products.find(p => p.id === item.items![0]);
                      imageSrc = firstProduct?.image;
                    } else if (item.productId) {
                      const product = products.find(p => p.id === item.productId);
                      imageSrc = product?.image;
                    }

                    return (
                      <div key={item.id} className="flex gap-4 py-4 border-b last:border-0">
                        <div className="bg-gray-100 w-16 h-16 rounded-md flex items-center justify-center text-xs text-gray-500 overflow-hidden shrink-0">
                          {imageSrc ? (
                            <img src={imageSrc} alt="Product" className="w-full h-full object-cover" />
                          ) : (
                            "IMG"
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-[hsl(var(--color-deep-forest))]">
                            {item.type === 'box' ? 'Custom Dozen Box' : 'Dozen Pastries'}
                          </div>
                          <div className="text-sm text-[hsl(var(--color-moss))]">
                            Qty: {item.quantity}
                          </div>
                        </div>
                        <div className="font-medium text-[hsl(var(--color-deep-forest))]">
                          $45.00
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between text-[hsl(var(--color-moss))]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[hsl(var(--color-moss))]">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[hsl(var(--color-moss))]">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-serif font-bold text-[hsl(var(--color-deep-forest))] pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

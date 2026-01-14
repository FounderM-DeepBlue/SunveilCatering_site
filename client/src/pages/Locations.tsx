import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Black Coffee Company",
    address: "1800 Jonesboro Rd SE, Atlanta, GA 30315",
    type: "Coffee Shop",
    hours: "Mon-Sat 7am-4pm",
    phone: "(555) 123-4567",
    products: ["Sabaayad", "Buskud", "Muffins"]
  },
  {
    id: 2,
    name: "East Lake Farmers Market",
    address: "2nd & Hosea, Atlanta, GA",
    type: "Market",
    hours: "Saturdays 8am-12pm",
    phone: "",
    products: ["Full Menu"]
  },
  {
    id: 3,
    name: "Grant Park Market",
    address: "519 Memorial Dr SE, Atlanta, GA 30312",
    type: "Grocery",
    hours: "Daily 8am-9pm",
    phone: "(555) 987-6543",
    products: ["Bread Loaves", "Cookies"]
  }
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
      <Navbar />
      
      <main className="pt-24 pb-20">
         <div className="container mx-auto px-4 md:px-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6 text-center">Find Sunveil Near You</h1>
            <p className="text-center text-lg text-[hsl(var(--color-moss))]/70 max-w-2xl mx-auto">
              We partner with local coffee shops and markets to bring our fresh pastries closer to you.
            </p>
         </div>

         {/* Map Placeholder */}
         <div className="w-full h-[400px] bg-[hsl(var(--color-muted))] mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center text-[hsl(var(--color-moss))]/40 font-bold text-xl">
               Interactive Map Loading...
            </div>
            {/* Mock pins */}
            <div className="absolute top-1/2 left-1/2 -translate-x-12 -translate-y-8 text-[hsl(var(--color-forest))]">
               <MapPin className="w-10 h-10 fill-[hsl(var(--color-forest))] text-white" />
            </div>
            <div className="absolute top-1/3 left-1/3 text-[hsl(var(--color-forest))]">
               <MapPin className="w-10 h-10 fill-[hsl(var(--color-forest))] text-white" />
            </div>
         </div>

         <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {locations.map(loc => (
                 <div key={loc.id} className="bg-white p-6 rounded-xl border border-[hsl(var(--color-border))] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                         <span className="text-xs font-bold text-[hsl(var(--color-amber))] uppercase tracking-wider">{loc.type}</span>
                         <h3 className="font-serif font-bold text-xl text-[hsl(var(--color-deep-forest))]">{loc.name}</h3>
                       </div>
                       <a href="#" className="p-2 bg-[hsl(var(--color-cream))] rounded-full hover:bg-[hsl(var(--color-forest))] hover:text-white transition-colors">
                         <ExternalLink className="w-4 h-4" />
                       </a>
                    </div>
                    
                    <ul className="space-y-3 text-sm text-[hsl(var(--color-moss))]/80 mb-6">
                       <li className="flex items-start gap-3">
                         <MapPin className="w-4 h-4 mt-0.5 text-[hsl(var(--color-forest))]" />
                         <span>{loc.address}</span>
                       </li>
                       <li className="flex items-center gap-3">
                         <Clock className="w-4 h-4 text-[hsl(var(--color-forest))]" />
                         <span>{loc.hours}</span>
                       </li>
                       {loc.phone && (
                         <li className="flex items-center gap-3">
                           <Phone className="w-4 h-4 text-[hsl(var(--color-forest))]" />
                           <span>{loc.phone}</span>
                         </li>
                       )}
                    </ul>

                    <div className="pt-4 border-t border-[hsl(var(--color-border))]">
                       <p className="text-xs font-bold text-[hsl(var(--color-deep-forest))] mb-2">Carries:</p>
                       <div className="flex flex-wrap gap-2">
                          {loc.products.map(p => (
                            <span key={p} className="px-2 py-1 bg-[hsl(var(--color-cream))] rounded text-xs text-[hsl(var(--color-moss))] font-medium">
                              {p}
                            </span>
                          ))}
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-16 bg-[hsl(var(--color-deep-forest))] text-[hsl(var(--color-cream))] p-8 md:p-12 rounded-2xl text-center">
               <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4">Want Sunveil at your local shop?</h3>
               <p className="mb-8 opacity-90 max-w-xl mx-auto">Let us know where you'd like to see our pastries next, or if you're a business owner looking to partner.</p>
               <div className="flex gap-4 justify-center">
                  <button className="bg-[hsl(var(--color-amber))] text-[hsl(var(--color-deep-forest))] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors">
                    Suggest a Location
                  </button>
                  <button className="bg-transparent border border-[hsl(var(--color-cream))] text-[hsl(var(--color-cream))] px-6 py-3 rounded-full font-bold hover:bg-[hsl(var(--color-cream))] hover:text-[hsl(var(--color-deep-forest))] transition-colors">
                    Become a Partner
                  </button>
               </div>
            </div>
         </div>
      </main>
      
      <Footer />
    </div>
  );
}

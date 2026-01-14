import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import cateringHero from "@assets/generated_images/elegant_catering_event_setup.png";

export default function Catering() {
  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={cateringHero} alt="Catering" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[hsl(var(--color-deep-forest))]/60 mix-blend-multiply" />
          </div>
          <div className="container relative z-10 text-center px-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[hsl(var(--color-amber))] font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Weddings • Corporate • Private Events
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold text-[hsl(var(--color-cream))] mb-6"
            >
              Bring Sunveil to Your Table
            </motion.h1>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Column: Info */}
              <div className="space-y-8">
                <div>
                   <h2 className="text-3xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-4">
                     Catering with Intention
                   </h2>
                   <p className="text-lg text-[hsl(var(--color-moss))]/80 leading-relaxed">
                     Your guests deserve more than "standard catering." They deserve food that sparks conversation and creates memories. We bring the same "from scratch" philosophy from our bakery to your large-scale events.
                   </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-[hsl(var(--color-border))]">
                    <h3 className="font-serif font-bold text-xl text-[hsl(var(--color-forest))] mb-2">Corporate Events</h3>
                    <p className="text-sm text-[hsl(var(--color-moss))]/70">
                      Impress clients and treat your team with pastries and savory platters that show you value quality.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-[hsl(var(--color-border))]">
                    <h3 className="font-serif font-bold text-xl text-[hsl(var(--color-forest))] mb-2">Weddings</h3>
                    <p className="text-sm text-[hsl(var(--color-moss))]/70">
                      Add a unique cultural touch to your special day with our signature dessert tables and favors.
                    </p>
                  </div>
                </div>

                <div>
                   <h3 className="font-serif font-bold text-lg text-[hsl(var(--color-deep-forest))] mb-4">Why Choose Sunveil Catering?</h3>
                   <ul className="space-y-3">
                     {[
                       "Customizable menus tailored to your event",
                       "Options for dietary needs (Halal, Vegetarian)",
                       "Sustainable packaging and zero-waste practices",
                       "Professional setup and presentation"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-[hsl(var(--color-moss))]/80">
                         <CheckCircle2 className="w-5 h-5 text-[hsl(var(--color-amber))]" />
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[hsl(var(--color-border))]">
                <h3 className="text-2xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6">
                  Request a Quote
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[hsl(var(--color-deep-forest))]">First Name</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-forest))]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[hsl(var(--color-deep-forest))]">Last Name</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-forest))]" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[hsl(var(--color-deep-forest))]">Email Address</label>
                    <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-forest))]" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[hsl(var(--color-deep-forest))]">Event Date</label>
                      <input type="date" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-forest))]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[hsl(var(--color-deep-forest))]">Guest Count</label>
                      <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-forest))]">
                        <option>10-50</option>
                        <option>50-100</option>
                        <option>100-200</option>
                        <option>200+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[hsl(var(--color-deep-forest))]">Event Type</label>
                    <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-forest))]">
                      <option>Wedding</option>
                      <option>Corporate Meeting</option>
                      <option>Private Party</option>
                      <option>Community Event</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[hsl(var(--color-deep-forest))]">Additional Details</label>
                    <textarea rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-forest))]" placeholder="Tell us about your vision..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[hsl(var(--color-forest))] text-white font-bold py-3 rounded-md hover:bg-[hsl(var(--color-deep-forest))] transition-colors flex items-center justify-center gap-2">
                    Submit Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

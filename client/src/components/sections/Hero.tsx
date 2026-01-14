import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_somali_pastries_hero_background.png";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Somali Pastries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--color-deep-forest))]/80 via-[hsl(var(--color-deep-forest))]/40 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-[hsl(var(--color-cream))]"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-6 border border-[hsl(var(--color-amber))] rounded-full text-[hsl(var(--color-amber))] text-xs font-bold tracking-wider uppercase bg-[hsl(var(--color-deep-forest))]/50 backdrop-blur-sm"
          >
            Authentic Somali Bakery
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-[hsl(var(--color-cream))] drop-shadow-lg">
            Heritage in <br />
            <span className="text-[hsl(var(--color-amber))] italic font-serif">Every Bite</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg font-light leading-relaxed">
            Pastries crafted from Somali tradition, baked fresh daily in Atlanta. 
            Experience the warmth of Sabaayad and the sweetness of Buskud.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[hsl(var(--color-forest))] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[hsl(var(--color-deep-forest))] transition-all flex items-center justify-center gap-2 group"
            >
              Order by the Dozen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Find Us Locally
            </motion.button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm font-medium opacity-80">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[hsl(var(--color-amber))] rounded-full" /> Same-Day Delivery ATL
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[hsl(var(--color-amber))] rounded-full" /> Overnight Nationwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

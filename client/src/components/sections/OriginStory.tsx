import { motion } from "framer-motion";
import { Link } from "wouter";
import storyImg from "@assets/generated_images/somali_baking_tradition_story_image.png";
import pattern from "@assets/generated_images/somali_textile_pattern_texture.png";

export function OriginStory() {
  return (
    <section className="relative py-24 overflow-hidden bg-[hsl(var(--color-cream))]">
      {/* Pattern Overlay */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${pattern})`, backgroundSize: '400px' }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={storyImg} 
                alt="Hands kneading dough" 
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-[hsl(var(--color-amber))] rounded-2xl z-0 hidden md:block" />
            
            <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--color-deep-forest))] text-[hsl(var(--color-cream))] p-6 rounded-lg shadow-xl z-20 max-w-xs">
              <p className="font-serif italic text-lg">"Every pastry tells a story of resilience, community, and flavor."</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[hsl(var(--color-rust))] font-bold tracking-wider uppercase text-sm mb-4 block">The Origin Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6 leading-tight">
              From Mogadishu Kitchens to <span className="text-[hsl(var(--color-forest))]">Atlanta's Heart</span>
            </h2>
            <div className="space-y-6 text-lg text-[hsl(var(--color-moss))]/80 leading-relaxed">
              <p>
                Sunveil Catering began not in a commercial kitchen, but in the warmth of a family home where recipes were passed down through three generations.
              </p>
              <p>
                What started as a way to preserve our Somali heritage has grown into a movement. We don't just bake pastries; we bake memories. The scent of cardamom and cloves that fills our bakery is the same scent that filled our grandmother's kitchen.
              </p>
              <p>
                Our signature <strong className="text-[hsl(var(--color-deep-forest))]">Sabaayad</strong> and <strong className="text-[hsl(var(--color-deep-forest))]">Buskud</strong> are crafted with the same techniques used for decades, bringing an authentic taste of East Africa to your table.
              </p>
            </div>
            
            <Link href="/story">
              <a className="inline-block mt-8 text-[hsl(var(--color-forest))] font-bold text-lg border-b-2 border-[hsl(var(--color-amber))] pb-1 hover:text-[hsl(var(--color-amber))] transition-colors">
                Read Our Full Story
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import spiceImg from "@assets/generated_images/mortar_and_pestle_grinding_spices.png";
import gardenImg from "@assets/generated_images/lush_backyard_vegetable_garden.png";
import storyHeroImg from "@assets/generated_images/somali_baking_tradition_story_image.png"; // Reusing this one as it fits perfectly

export default function OurStory() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--color-cream))] font-sans">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={storyHeroImg} alt="Our Story" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-[hsl(var(--color-cream))] mb-6"
            >
              Food That Tells a Story
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-1 w-24 bg-[hsl(var(--color-amber))] mx-auto rounded-full"
            />
          </div>
        </section>

        {/* Origin Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn} className="space-y-6 text-lg leading-relaxed text-[hsl(var(--color-moss))]/80">
                <h2 className="text-4xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6">
                  East African Roots
                </h2>
                <p>
                  My culinary journey began in the vibrant kitchens of East Africa, from the age of seven where I learned that the best meals aren't just made—they're crafted with intention, patience, and love from my mother.
                </p>
                <p>
                  From bustling markets filled with cardamom, cinnamon, cumin, coriander and cloves to home kitchens where recipes passed through generations, I discovered that food is more than sustenance. It's connection. It's memory. It's how we show love when words aren't enough.
                </p>
                <p className="font-medium text-[hsl(var(--color-deep-forest))] border-l-4 border-[hsl(var(--color-amber))] pl-4 italic">
                  "Today, I bring those traditions to Atlanta honoring East African flavors while sourcing locally and growing what I can in my own backyard."
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px] rounded-t-full overflow-hidden shadow-2xl"
              >
                 {/* Placeholder for a personal/founder image if we had one, using spice image for now to represent the markets */}
                <img src={spiceImg} alt="Spices" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Made from Scratch Section */}
        <section className="py-24 bg-[hsl(var(--color-deep-forest))] text-[hsl(var(--color-cream))] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${storyHeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span {...fadeIn} className="text-[hsl(var(--color-amber))] font-bold tracking-widest uppercase text-sm mb-4 block">
                No Shortcuts. No Preservatives.
              </motion.span>
              <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">
                When we say "from scratch,"<br/>we mean it.
              </motion.h2>
              <motion.p {...fadeIn} className="text-lg opacity-90 leading-relaxed mb-8">
                Every weekend, I grind <span className="text-[hsl(var(--color-amber))] font-bold">xawaash</span>—the signature East African spice blend of cumin, coriander, cardamom and cinnamon—by hand. This is the soul of our cooking, the warmth in every bite, the aroma that makes our kitchen smell like home.
              </motion.p>
              <motion.p {...fadeIn} className="text-lg opacity-90 leading-relaxed">
                Every dough is rolled fresh. Every sauce simmers for hours. Every spice blend is crafted in small batches to preserve its vibrant flavor. Just whole ingredients and time. Because you can taste the difference between food made with care and food made for convenience.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Sourcing & Farm Section */}
        <section className="py-24 bg-[hsl(var(--color-cream))]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
              >
                <img src={gardenImg} alt="Our Garden" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="text-[hsl(var(--color-forest))] font-bold text-sm">Our Backyard Farm</p>
                  <p className="text-xs text-[hsl(var(--color-moss))]">Seasonal vegetables, heirloom tomatoes, and fresh herbs grown right here.</p>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="order-1 md:order-2 space-y-6 text-lg leading-relaxed text-[hsl(var(--color-moss))]/80">
                <h2 className="text-4xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6">
                  Distinctive and Bold
                </h2>
                <p>
                  Here's what sets us apart: we know every farmer by name. Our produce comes from Atlanta-area farms practicing sustainable agriculture. Our meats are pasture-raised and humanely treated. Our herbs? Many grow in our backyard garden and my husband's hydroponic system.
                </p>
                <p>
                  From soil to plate, we source with intention because knowing where your food comes from isn't a luxury. It's how food should be.
                </p>
                <div className="pt-4">
                  <h3 className="font-serif font-bold text-xl text-[hsl(var(--color-deep-forest))] mb-3">Our Promise</h3>
                  <ul className="space-y-3">
                    {[
                      "Everything made from scratch in our kitchen",
                      "Locally sourced from Atlanta farms we trust",
                      "Meat raised humanely on pastures",
                      "Many ingredients grown in our backyard",
                      "Complete transparency"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-[hsl(var(--color-forest))]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Closing Statement */}
        <section className="py-20 bg-[hsl(var(--color-cream))] border-t border-[hsl(var(--color-deep-forest))]/10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
             <h3 className="text-3xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6">Why This Matters</h3>
             <p className="text-lg text-[hsl(var(--color-moss))]/80 mb-8">
               Most caterers optimize for cost and speed. We optimize for quality and integrity. It means we're not for everyone, but if you care about what you eat and where it comes from, you're already part of us.
             </p>
             <p className="font-serif italic text-xl text-[hsl(var(--color-rust))]">
               "Whether you're planning a wedding, hosting an event, or craving something real—we're here to bring warmth, flavor, and intention to your table."
             </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

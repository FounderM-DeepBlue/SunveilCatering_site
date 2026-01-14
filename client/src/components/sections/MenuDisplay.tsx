import { motion } from "framer-motion";
import logo from "@assets/1_1768354997787.png"; // Using the other logo for variety

export function MenuDisplay() {
  const breadAndMuffins = [
    { name: "Zucchini Bread Per Slice", price: 6.79 },
    { name: "Lemon Poppy Loaf Per Slice", price: 6.79 },
    { name: "Blueberry Lavender Muffin", price: 8.25 },
    { name: "Apple Upside Down Cupcakes", price: 7.50 },
  ];

  const danishAndRolls = [
    { name: "Apple Cheese Danish", price: 8.79 },
    { name: "Classic Cheese Danish", price: 8.79 },
    { name: "Strawberry Cheese Danish", price: 8.79 },
    { name: "Peach Cobbler Cinnamon Rolls", price: 9.20 },
  ];

  return (
    <div className="py-20 bg-[hsl(var(--color-cream))] relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-[hsl(var(--color-amber))]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--color-forest))]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <img src={logo} alt="Sunveil" className="h-24 mx-auto mb-6" />
          <h2 className="text-5xl font-serif font-bold text-[hsl(var(--color-rust))] mb-2 uppercase tracking-wide">Homemade Bakery</h2>
          <div className="h-1 w-24 bg-[hsl(var(--color-forest))] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[hsl(var(--color-deep-forest))] text-[hsl(var(--color-cream))] py-2 px-6 rounded-lg inline-block font-bold tracking-widest text-sm mb-8 shadow-lg">
              BREAD AND MUFFINS
            </div>
            
            <ul className="space-y-6">
              {breadAndMuffins.map((item, idx) => (
                <li key={idx} className="flex justify-between items-baseline group border-b border-dashed border-[hsl(var(--color-deep-forest))]/20 pb-2">
                  <span className="font-bold text-[hsl(var(--color-deep-forest))] text-lg group-hover:text-[hsl(var(--color-forest))] transition-colors">
                    {item.name}
                  </span>
                  <span className="bg-[hsl(var(--color-secondary))] text-[hsl(var(--color-deep-forest))] font-bold px-3 py-1 rounded text-sm min-w-[70px] text-center">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-[hsl(var(--color-rust))] text-[hsl(var(--color-cream))] py-2 px-6 rounded-lg inline-block font-bold tracking-widest text-sm mb-8 shadow-lg">
              DANISH AND ROLLS
            </div>
            
            <ul className="space-y-6">
              {danishAndRolls.map((item, idx) => (
                <li key={idx} className="flex justify-between items-baseline group border-b border-dashed border-[hsl(var(--color-deep-forest))]/20 pb-2">
                  <span className="font-bold text-[hsl(var(--color-deep-forest))] text-lg group-hover:text-[hsl(var(--color-forest))] transition-colors">
                    {item.name}
                  </span>
                  <span className="bg-[hsl(var(--color-secondary))] text-[hsl(var(--color-deep-forest))] font-bold px-3 py-1 rounded text-sm min-w-[70px] text-center">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
           <div className="bg-[hsl(var(--color-secondary))] p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
             <h4 className="font-bold text-[hsl(var(--color-deep-forest))] mb-2">Contact us for Inquiry at</h4>
             <a href="mailto:sunveilcatering@gmail.com" className="font-black text-xl text-[hsl(var(--color-deep-forest))] hover:underline">SUNVEILCATERING@GMAIL.COM</a>
           </div>
           <div className="bg-[hsl(var(--color-cream))] p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
             <h4 className="font-bold text-[hsl(var(--color-deep-forest))] mb-2">Available at Black Coffee Company:</h4>
             <p className="font-medium text-[hsl(var(--color-deep-forest))]">1800 Jonesboro Rd. SE,<br/>Atlanta, GA 30315</p>
           </div>
        </motion.div>
      </div>
    </div>
  );
}

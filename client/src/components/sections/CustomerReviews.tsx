import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Atlanta, GA",
      text: "The sabaayad is absolutely authentic - it reminds me exactly of what my grandmother used to make. Perfectly flaky and delicious!",
      rating: 5,
    },
    {
      id: 2,
      name: "James T.",
      location: "Decatur, GA",
      text: "Hands down the best pastries in Atlanta. The fusion of traditional Somali flavors with modern baking is incredible.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amina K.",
      location: "Midtown",
      text: "I order the sambusas for every family gathering now. They are always a hit! Fresh, crispy, and perfectly spiced.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[hsl(var(--color-cream))] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--color-amber))]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(var(--color-forest))]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(var(--color-amber))] font-bold tracking-widest uppercase text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[hsl(var(--color-deep-forest))] mb-6">
            Loved by Locals
          </h2>
          <div className="h-1 w-24 bg-[hsl(var(--color-amber))] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[hsl(var(--color-border))] relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[hsl(var(--color-amber))]/20 group-hover:text-[hsl(var(--color-amber))]/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(var(--color-amber))] text-[hsl(var(--color-amber))]" />
                ))}
              </div>

              <p className="text-[hsl(var(--color-deep-forest))]/80 text-lg mb-8 leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--color-deep-forest))] rounded-full flex items-center justify-center text-[hsl(var(--color-cream))] font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[hsl(var(--color-deep-forest))]">{review.name}</h4>
                  <p className="text-sm text-[hsl(var(--color-moss))]">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

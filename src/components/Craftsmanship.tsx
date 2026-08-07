import { motion } from 'motion/react';

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-24 bg-white text-stone-900 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-square overflow-hidden bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80&w=1000" 
                alt="Jewelry Craftsmanship" 
                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] opacity-50 mb-6 block text-stone-900">The Atelier</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight font-light italic text-stone-500">
              The Alchemy of Stone
            </h2>
            <p className="text-stone-900 font-sans text-xs leading-relaxed opacity-70 mb-6">
              Every stone is sourced directly from ethical mines. Our artisans spend over 40 hours carving each decorative mount to follow the unique organic flow of the mineral.
            </p>
            <p className="text-stone-900 font-sans text-xs leading-relaxed opacity-70 mb-10">
              Our commitment to ethical sourcing and exceptional artistry means that your piece is not just beautiful—it's crafted with integrity.
            </p>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-2 rounded-full bg-stone-500"></div>
              <span className="font-sans text-[9px] tracking-widest uppercase text-stone-900 opacity-80">Certified Ethical Origin</span>
            </div>

            <a href="#contact" className="inline-block border-b border-stone-500 pb-1 text-[11px] uppercase tracking-widest text-stone-900 hover:text-stone-500 transition-colors">
              Learn About Our Process
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

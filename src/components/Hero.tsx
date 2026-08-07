import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-100">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000"
          alt="Elegant Jewelry"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-50/40" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-stone-900 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 font-sans opacity-60"
        >
          Exquisite Decorative Stones
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-[100px] text-stone-900 font-serif font-light leading-[0.9] tracking-tighter mb-8"
        >
          Elegance <br />
          <span className="italic font-normal">Carved in</span> <br />
          Stone
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#collections" className="inline-block border border-stone-900 text-stone-900 px-10 py-4 uppercase tracking-[0.2em] text-[11px] font-sans hover:bg-stone-900 hover:text-stone-50 transition-colors duration-300">
            Discover the Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}

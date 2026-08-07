import { motion } from 'motion/react';

export default function Intro() {
  return (
    <section className="py-24 md:py-32 bg-stone-50 text-stone-900 border-b border-stone-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-light italic leading-snug mb-8 text-stone-500">
            Where nature's most captivating creations meet master craftsmanship.
          </h2>
          <div className="w-12 h-[1px] bg-stone-600 mx-auto mb-8 opacity-50" />
          <p className="text-stone-900 font-sans leading-relaxed max-w-2xl mx-auto text-[12px] opacity-70">
            Our legacy is built on the pursuit of perfection. Each decorative stone is hand-selected for its unique character, color, and brilliance, then meticulously set into timeless designs that celebrate both the gem and the wearer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

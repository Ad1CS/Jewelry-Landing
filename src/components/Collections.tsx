import { motion } from 'motion/react';

const collections = [
  {
    title: 'Emerald Symphony',
    description: 'Vivid greens set in 18k gold.',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Sapphire Midnight',
    description: 'Deep oceanic blues that captivate.',
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Ruby Passion',
    description: 'Fiery reds for the bold at heart.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
  }
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-stone-50 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] opacity-50 text-stone-900 mb-4 block">Our Masterpieces</span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 font-light">Featured Styles</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col items-center text-center space-y-3"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4 w-full bg-stone-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-stone-900/5 transition-opacity duration-700 group-hover:opacity-0" />
              </div>
              <p className="text-sm tracking-wider font-sans text-stone-900">{item.title} <span className="opacity-40 italic font-serif">— Ring</span></p>
              <p className="text-[11px] tracking-wider text-stone-900 font-sans opacity-50">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

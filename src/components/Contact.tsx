import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="bg-stone-50">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="px-6 py-24 md:py-32 max-w-3xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4 font-light">Request a Consultation</h2>
            <p className="text-[12px] font-sans text-stone-900 opacity-70 mb-12">
              Discover the perfect piece or inquire about bespoke commissions with our expert artisans.
            </p>
            
            <form className="space-y-8 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative pt-4">
                  <input 
                    type="text" 
                    id="name" 
                    className="peer w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 placeholder-transparent focus:outline-none focus:border-stone-500 transition-colors" 
                    placeholder="Name" 
                  />
                  <label htmlFor="name" className="absolute left-0 top-0 text-[10px] text-stone-900 opacity-50 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-[12px] peer-placeholder-shown:top-6 peer-placeholder-shown:normal-case peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:opacity-100 peer-focus:tracking-[0.2em]">Name</label>
                </div>
                <div className="relative pt-4">
                  <input 
                    type="email" 
                    id="email" 
                    className="peer w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 placeholder-transparent focus:outline-none focus:border-stone-500 transition-colors" 
                    placeholder="Email" 
                  />
                  <label htmlFor="email" className="absolute left-0 top-0 text-[10px] text-stone-900 opacity-50 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-[12px] peer-placeholder-shown:top-6 peer-placeholder-shown:normal-case peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:opacity-100 peer-focus:tracking-[0.2em]">Email</label>
                </div>
              </div>
              <div className="relative pt-4">
                <textarea 
                  id="message" 
                  rows={4}
                  className="peer w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 placeholder-transparent focus:outline-none focus:border-stone-500 transition-colors resize-none" 
                  placeholder="Message" 
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-0 text-[10px] text-stone-900 opacity-50 uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-[12px] peer-placeholder-shown:top-6 peer-placeholder-shown:normal-case peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:opacity-100 peer-focus:tracking-[0.2em]">Message / Inquiry</label>
              </div>
              
              <div className="text-center pt-6">
                <button type="submit" className="bg-stone-900 text-stone-50 px-12 py-4 uppercase tracking-[0.2em] text-[11px] font-sans hover:bg-stone-800 transition-colors duration-300">
                  Send Inquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream to-white" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop"
                alt="Roasting Process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-coffee-light/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-coffee-medium mb-6">
              Tentang Kami
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif text-coffee-dark mb-8 tracking-tighter leading-tight">
              Lebih dari Sekadar Kopi, Ini Adalah <span className="italic font-light">Cerita</span>.
            </h3>
            <p className="text-coffee-dark/70 text-lg leading-relaxed mb-8">
              Ngopiin lahir dari kecintaan kami pada aroma kopi yang menyapa di pagi hari. Kami percaya bahwa setiap cangkir memiliki jiwa, dan setiap tegukan adalah perjalanan rasa yang unik.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-2xl text-coffee-dark">01</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Biji Kopi Lokal Pilihan</h4>
                  <p className="text-sm text-coffee-dark/60 italic leading-relaxed">
                    Kami bekerja langsung dengan petani di berbagai pelosok nusantara untuk memastikan kualitas terbaik dunia.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-cream rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-2xl text-coffee-dark">02</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2">Penyeduhan Presisi</h4>
                  <p className="text-sm text-coffee-dark/60 italic leading-relaxed">
                    Diproses oleh barista berpengalaman dengan standar industri global untuk rasa yang konsisten.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

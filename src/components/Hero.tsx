/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background blobs for organic feel */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-coffee-light/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-coffee-medium/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-px bg-coffee-dark/40" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-coffee-medium">
              Since 2026
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl leading-[1.1] mb-8 text-coffee-dark tracking-tighter">
            Teman <span className="italic font-light text-coffee-medium">Ngopi</span> Setiap Hari.
          </h1>

          <p className="text-lg text-coffee-dark/70 mb-10 max-w-md leading-relaxed">
            Menghadirkan biji kopi pilihan dari petani lokal dengan teknik penyeduhan modern untuk pengalaman rasa yang tak terlupakan.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onExplore}
              className="bg-coffee-dark text-cream px-8 py-4 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all font-medium group"
            >
              Pesan Sekarang
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="border border-coffee-dark/20 px-8 py-4 rounded-full hover:bg-coffee-dark/5 transition-all font-medium">
              Lihat Menu
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
              alt="Coffee Shop Vibe"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-coffee-light rounded-full -z-0 mix-blend-multiply opacity-30 animate-pulse" />
          <div className="absolute top-10 -left-6 bg-cream/90 backdrop-blur-md p-6 rounded-2xl shadow-lg z-20 border border-white/20">
            <p className="font-serif italic text-2xl mb-1">"Bestseller"</p>
            <p className="text-xs uppercase tracking-widest font-bold opacity-60">Vanilla Latte</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

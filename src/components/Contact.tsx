/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pesan Anda telah terkirim! Terima kasih.');
  };

  return (
    <section id="contact" className="py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-coffee-medium mb-6">
                Hubungi Kami
              </h2>
              <h3 className="text-5xl md:text-6xl font-serif text-coffee-dark mb-12 tracking-tighter">
                Mari Bertemu di <span className="italic font-light">Cangkir</span> Berikutnya.
              </h3>

              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-white rounded-2xl shadow-sm">
                    <MapPin className="w-6 h-6 text-coffee-medium" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Lokasi Kami</h4>
                    <p className="text-coffee-dark/60 text-sm leading-relaxed">
                      Jl. Dr. Setiabudi No.229, Isola<br />Kec. Sukasari, UPI Bandung, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-white rounded-2xl shadow-sm">
                    <Phone className="w-6 h-6 text-coffee-medium" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Telepon / WhatsApp</h4>
                    <p className="text-coffee-dark/60 text-sm leading-relaxed">
                      +62 877 8171 0661
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="p-4 bg-white rounded-2xl shadow-sm">
                    <Mail className="w-6 h-6 text-coffee-medium" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Email</h4>
                    <p className="text-coffee-dark/60 text-sm leading-relaxed">
                      ngopiinyukk@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Simple Map Placeholder */}
              <div className="mt-16 w-full h-64 rounded-[2rem] overflow-hidden grayscale contrast-125 opacity-70 border border-coffee-dark/10 shadow-inner">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.201581404172!2d107.5919010!3d-6.8604107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!2m2!1s0x2e68e6af96ca7d23%3A0xc391166649f8016!2sUniversitas%20Pendidikan%20Indonesia!5e0!3m2!1sid!2sid!4v1715177243000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-coffee-dark/5"
            >
              <h4 className="text-2xl font-serif mb-8 italic">Pesan sekarang kopimu</h4>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const message = formData.get('message');
                  const whatsappUrl = `https://wa.me/6287781710661?text=Halo Ngopiin! Saya ${name}. ${message}`;
                  window.open(whatsappUrl, '_blank');
                }} 
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-40 ml-2">Nama Lengkap</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-cream/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-coffee-medium transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-40 ml-2">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    className="w-full bg-cream/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-coffee-medium transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-40 ml-2">Pesan</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Apa yang ingin Anda sampaikan?"
                    className="w-full bg-cream/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-coffee-medium transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-coffee-dark text-cream py-5 rounded-fill font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all rounded-2xl"
                >
                  <Send className="w-5 h-5" />
                  Kirim via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

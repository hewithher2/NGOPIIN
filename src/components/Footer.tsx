/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export default function Footer({ onScrollToTop }: { onScrollToTop: () => void }) {
  return (
    <footer className="bg-coffee-dark text-cream pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <h2 className="text-4xl font-serif font-bold tracking-tighter mb-8 italic">NGOPIIN.</h2>
            <p className="text-cream/60 max-w-sm text-lg leading-relaxed mb-8 italic">
              "Teman ngopi setiap hari, menghadirkan kehangatan di setiap tegukan."
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/ngopiinn/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-coffee-dark transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-coffee-light mb-8">Navigasi</h4>
            <ul className="space-y-4 font-medium opacity-80">
              {['Beranda', 'Produk', 'Tentang Kami', 'Kontak', 'Promo'].map((item) => (
                <li key={item}>
                  <button className="hover:text-coffee-light transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-coffee-light mb-8">Jam Operasional</h4>
            <ul className="space-y-4 font-medium opacity-80">
              <li>
                <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Senin - Jumat</p>
                <p>08.00 - 22.00 WIB</p>
              </li>
              <li>
                <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Sabtu - Minggu</p>
                <p>07.00 - 23.00 WIB</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm opacity-40">
            © 2026 Ngopiin Coffee Shop. All rights reserved.
          </p>
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-coffee-light transition-colors group"
          >
            Kembali ke Atas
            <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center group-hover:bg-coffee-light group-hover:text-coffee-dark transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Product, CartItem } from './types.ts';
import { PRODUCTS } from './constants.ts';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = activeCategory === 'Semua' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    { q: "Apakah biji kopi Ngopiin segar?", a: "Ya, kami melakukan roasting biji kopi kami setiap minggu untuk menjamin kesegaran rasa di setiap cangkir." },
    { q: "Bisa pesan melalui WhatsApp?", a: "Tentu! Silakan klik nomor WhatsApp di bagian kontak untuk pemesanan langsung." },
    { q: "Apakah ada opsi susu nabati?", a: "Kami menyediakan opsi Oatside (susu gandum) untuk semua varian latte kami." }
  ];

  return (
    <div className="min-h-screen selection:bg-coffee-light selection:text-coffee-dark">
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartToggle={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
      />

      <main>
        <Hero onExplore={() => scrollToSection('products')} />

        <section id="products" className="py-32 container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-coffee-medium mb-6">
                Menu Kami
              </h2>
              <h3 className="text-5xl md:text-6xl font-serif text-coffee-dark mb-0 tracking-tighter">
                Seni dalam <span className="italic font-light text-coffee-medium">Setiap</span> Cangkir.
              </h3>
            </div>
            <div className="flex gap-4">
              {['Semua', 'Coffee', 'Brew'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-coffee-dark text-cream'
                      : 'border border-coffee-dark/10 hover:bg-coffee-dark/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                index={index}
              />
            ))}
          </div>
        </section>

        <About />
        <Contact />

        <section id="faq" className="py-20 bg-cream/50">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-serif text-coffee-dark mb-12 text-center italic">FAQ - Tanya Jawab</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-coffee-dark/5">
                  <h4 className="font-bold text-coffee-dark mb-3">"{faq.q}"</h4>
                  <p className="text-coffee-dark/60 text-sm italic">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}

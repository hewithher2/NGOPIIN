/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types.ts';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-coffee-dark/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="text-xl font-serif">Keranjang Belanja</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-coffee-dark/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-40 text-center">
                  <ShoppingBag className="w-16 h-16 mb-4" />
                  <p className="text-lg">Wah, keranjangmu masih kosong.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-coffee-dark/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-serif text-lg">{item.name}</h3>
                        <p className="font-bold">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-coffee-dark/10 rounded-full px-2 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-coffee-light transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-coffee-light transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-xs uppercase tracking-widest font-bold opacity-40 hover:opacity-100 hover:text-red-500 transition-all"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-white border-t border-coffee-dark/10">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold opacity-40 mb-1">Subtotal</p>
                    <p className="text-3xl font-serif font-bold text-coffee-dark">{formatPrice(total)}</p>
                  </div>
                </div>
                <button
                  className="w-full bg-coffee-dark text-cream py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-coffee-dark/10"
                  onClick={() => alert('Fitur Checkout akan segera hadir!')}
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

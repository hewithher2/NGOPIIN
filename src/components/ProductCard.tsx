/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Product } from '../types.ts';

export interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  index: number;
  key?: React.Key;
}

export default function ProductCard({ product, onAddToCart, index }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-coffee-dark/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-cream text-coffee-dark p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-coffee-dark hover:text-cream"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-coffee-dark border border-white/20">
          {product.category}
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-serif mb-1 group-hover:text-coffee-medium transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-coffee-dark/60 mb-3 max-w-[200px] line-clamp-2 italic">
            {product.description}
          </p>
          <p className="font-bold text-coffee-dark">{formatPrice(product.price)}</p>
        </div>
      </div>
    </motion.div>
  );
}

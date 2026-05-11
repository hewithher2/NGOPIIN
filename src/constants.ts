/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types.ts';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aren Sugar',
    description: 'Kopi susu gula aren khas dengan perpaduan espresso, susu segar, dan gula aren pilihan.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop',
    category: 'Coffee',
  },
  {
    id: '2',
    name: 'Caramel Macchiato',
    description: 'Susu steam dengan sirup vanilla, espresso, dan saus karamel di atasnya.',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop',
    category: 'Coffee',
  },
];
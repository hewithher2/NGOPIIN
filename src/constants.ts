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
    price: 25000,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop',
    category: 'Coffee',
  },
  {
    id: '3',
    name: 'Caramel Macchiato',
    description: 'Susu steam dengan sirup vanilla, espresso, dan saus karamel di atasnya.',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop',
    category: 'Coffee',
  },
  {
    id: '4',
    name: 'Cappuccino Art',
    description: 'Keseimbangan sempurna antara espresso, steamed milk, dan foam tebal.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    category: 'Coffee',
  },
  {
    id: '5',
    name: 'Cold Brew Signature',
    description: 'Kopi yang diseduh dingin selama 12 jam untuk rasa yang halus dan rendah asam.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    category: 'Brew',
  },
];

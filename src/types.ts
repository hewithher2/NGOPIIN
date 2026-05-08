/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Coffee' | 'Brew' | 'Snack';
}

export interface CartItem extends Product {
  quantity: number;
}

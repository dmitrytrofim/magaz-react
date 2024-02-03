import React, { createContext, useState } from 'react';
import { IProduct } from '../models';

export const CartContext = createContext<any>([]);

export function CartProvider({ children }: { children: React.ReactNode }) {
 const [cart, setCart] = useState<IProduct[]>([]);

 return (
  <CartContext.Provider value={[cart, setCart]}>
   {children}
  </CartContext.Provider>
 );
}

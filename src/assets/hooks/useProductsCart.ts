import { useReducer, useContext, useEffect } from 'react';
import { CartContext } from '../../components/cartContext';
import { IProduct } from '../../models';

export function useProductsCart({ el }: { el: IProduct }) {
 const [, setCart] = useContext(CartContext);
 const [quantity, dispatch] = useReducer(reducer, 1);

 function reducer(quantity: any, action: any) {
  switch (action) {
   case 'plus':
    return quantity + 1;
   case 'minus': {
    return quantity - 1;
   }
   default:
    throw new Error('Quantity incorrect.');
  }
 }

 useEffect(() => {
  if (quantity < 1) {
   setCart((x: any) => x.filter((elem: any) => elem !== el));
   return;
  }
  setCart((x: any) =>
   x.map((elem: IProduct) => {
    if (elem === el) {
     elem.quantity = quantity;
     return elem;
    }
    return elem;
   })
  );
 }, [quantity]);

 return { quantity, dispatch };
}

export default useProductsCart;

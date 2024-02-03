import { useContext, useMemo } from 'react';
import { CartContext } from '../components/cartContext';
import { IProduct } from '../models';
import ProductCart from './productInCart';

function Cart() {
 const [cart, setCart] = useContext(CartContext);
 let total: number = 0;

 useMemo(() => {
  total = cart.reduce(
   (acc: number, cur: IProduct) => acc + cur.price * (cur.quantity || 1),
   0
  );
 }, [cart]);

 const removeAll = () => {
  if (window.confirm('Are you sure?')) setCart([]);
 };

 return (
  <>
   <p className="text-[30px] font-700 text-center">Cart</p>
   <ul className="h-[60vh] overflow-auto">
    {cart.map((el: IProduct) => (
     <ProductCart el={el} key={el.id} />
    ))}
   </ul>
   <p className="text-[30px] font-700 text-center pt-[10px] px-[5px]">
    TOTAL: <span className="text-[red]">{total.toFixed(2)}$</span>
   </p>
   <div className="flex justify-center p-[5px]">
    {!!total && (
     <button
      className="text-[red] border border-[red] rounded-[5px] p-[3px]"
      type="button"
      onClick={removeAll}
     >
      Remove ALL
     </button>
    )}
   </div>
  </>
 );
}

export default Cart;

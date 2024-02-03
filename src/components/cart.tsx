import { useContext, useMemo } from 'react';
import { CartContext } from '../components/cartContext';
import { IProduct } from '../models';
import ProductCart from './productInCart';

function Cart() {
 const [cart, setCart] = useContext(CartContext);
 const total = useMemo(() => {
  return cart.reduce(
   (acc: number, cur: IProduct) => acc + cur.price * (cur.quantity || 1),
   0
  );
 }, [cart]);

 const removeAll = () => {
  if (window.confirm('Are you sure?')) setCart([]);
 };

 return (
  <>
   <p className="text-[30px] font-700 text-center border-b-[1px] pb-[10px]">
    Cart
   </p>
   <ul
    className={`${
     cart.length > 0 ? 'max-h-[calc(70vh-100px)]' : ''
    }  overflow-auto`}
   >
    {cart.map((el: IProduct) => (
     <ProductCart el={el} key={el.id} />
    ))}
   </ul>
   <p className="text-[30px] font-700 text-center border-t-[1px] pt-[10px] px-[5px]">
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

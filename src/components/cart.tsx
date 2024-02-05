import { useEffect } from 'react';
import { IProduct } from '../models';
import ProductInCart from './productInCart';
import { useDispatch, useSelector } from 'react-redux';
import { removeAll } from '../store/features/cartSlice';
import { togglePopup } from '../store/features/popupSlice';
import { summaTotal } from '../store/features/totalSlice';

function Cart() {
 const cart = useSelector((state: any) => state.cart.value);
 const total = useSelector((state: any) => state.total.value);
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(
   summaTotal(
    cart.reduce(
     (acc: number, cur: IProduct) => acc + cur.price * (cur.quantity || 1),
     0
    )
   )
  );
 }, [cart]);

 const removeAllProducts = () => {
  if (window.confirm('Are you sure?')) dispatch(removeAll());
 };

 return (
  <>
   <p
    className={`text-[30px] font-700 text-center ${
     !!total && 'border-b-[1px]'
    } pb-[10px]`}
   >
    Cart
   </p>
   <ul
    className={`${
     cart.length > 0 ? 'max-h-[calc(70vh-100px)]' : ''
    }  overflow-auto`}
   >
    {cart.map((el: IProduct) => (
     <ProductInCart el={el} key={el.id} />
    ))}
   </ul>
   <p className="text-[30px] font-700 text-center border-t-[1px] pt-[10px] px-[5px]">
    TOTAL: <span className="text-[red]">{total.toFixed(2)}$</span>
   </p>
   <div className="flex justify-center gap-[10px] p-[5px]">
    {!!total && (
     <button
      className="text-[white] border border-[green] bg-[green] rounded-[5px] py-[3px] px-[8px]"
      type="button"
      onClick={() => dispatch(togglePopup())}
     >
      ORDER
     </button>
    )}
    {!!total && (
     <button
      className="text-[red] border border-[red] rounded-[5px] py-[3px] px-[8px]"
      type="button"
      onClick={removeAllProducts}
     >
      Remove ALL
     </button>
    )}
   </div>
  </>
 );
}

export default Cart;

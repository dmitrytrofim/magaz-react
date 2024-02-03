import { useContext } from 'react';
import { CartContext } from '../components/cartContext';
import { IProduct } from '../models';

function Cart() {
 const [cart, setCart] = useContext(CartContext);
 const total = cart.reduce(
  (acc: number, cur: IProduct) => acc + cur.price * (cur.quantity || 1),
  0
 );

 const removeAll = () => {
  if (window.confirm('Are you sure?')) setCart([]);
 };

 return (
  <>
   <p className="text-[30px] font-700 text-center">Cart</p>
   <ul>
    {cart.map((el: IProduct) => (
     <li
      className="flex flex-col items-center first:border-t-[1px] border-b-[1px] p-[10px_5px]"
      key={el.id}
     >
      <img
       className="w-[100px] h-[100px] object-contain mb-[10px]"
       src={el.image}
       alt=""
      />
      <p className="text-center mb-[10px]">{el.title}</p>
      <div className="flex items-center">
       <button className="w-[25px] h-[25px] border rounded-full bg-[url('./img/svg/dash-lg.svg')] bg-cover bg-[black]"></button>
       <input
        className="grow-0 text-[20px] text-center w-[70px] p-0"
        type="text"
        value={1}
        readOnly
       />
       <button className="w-[25px] h-[25px] border rounded-full bg-[url('./img/svg/plus-lg.svg')] bg-cover bg-[black]"></button>
      </div>
     </li>
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

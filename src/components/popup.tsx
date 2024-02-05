import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../models';
import { togglePopup } from '../store/features/popupSlice';

function PopupOrder() {
 const popup = useSelector((state: any) => state.popup.value);
 const cart = useSelector((state: any) => state.cart.value);
 const total = useSelector((state: any) => state.total.value);
 const dispatch = useDispatch();

 useEffect(() => {
  if (popup) {
   document.body.style.overflow = 'hidden';
  } else {
   document.body.style.overflow = 'visible';
  }
 }, [popup]);

 const closePopup = (e: any) => {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
  if (e.target == e.currentTarget) {
   dispatch(togglePopup());
  }
 };

 return (
  <div
   className={`fixed w-full min-h-dvh inset-0 flex justify-start items-start bg-[rgba(0,0,0,0.5)] overflow-auto py-[20px] px-[5px] backdrop-blur-[4px] ${
    !popup && 'hidden'
   }`}
   onClick={closePopup}
  >
   <form
    action="send.js"
    className="relative bg-[white] rounded-[20px] p-[20px] m-auto"
   >
    <h2 className="text-[24px] font-700 text-center mb-[20px]">
     Form an order!
    </h2>
    <ul className="flex flex-col gap-[14px] mb-[20px]">
     {cart &&
      cart.map((el: IProduct) => (
       <li className="flex items-center gap-[10px]" key={el.id}>
        <img className="shrink-0 w-[30px] h-[30px]" src={el.image} alt="" />
        <p className="w-[150px] text-[12px]">{el.title}</p>
        <span>&#10799;</span>
        <span>{el?.quantity}</span>
        <span>=</span>
        <span>{((el?.quantity || 1) * el.price).toFixed(2)}$</span>
        <input
         type="hidden"
         name={`product${el.id}`}
         value={`${el.id}, ${el.quantity}, ${el.price}`}
        />
       </li>
      ))}
    </ul>
    <div className="flex justify-between items-center">
     <p className="text-[20px] font-500">
      Total: <span className="text-[red]">{total}$</span>
     </p>
     <button
      type="button"
      className="text-[white] bg-[green] text-[18px] font-500 py-[5px] px-[10px] rounded-[10px]"
     >
      TO PAY
     </button>
    </div>
    <div
     className="absolute top-[10px] right-[10px] text-[20px] cursor-pointer"
     onClick={closePopup}
    >
     &#10799;
    </div>
   </form>
  </div>
 );
}

export default PopupOrder;

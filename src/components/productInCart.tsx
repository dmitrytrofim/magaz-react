import { useDispatch } from 'react-redux';
import { IProduct } from '../models';
import { setQuantity, removeCart } from '../store/features/cartSlice';
import { useEffect, useReducer } from 'react';

function ProductInCart({ el }: { el: IProduct }) {
 const dispatch = useDispatch();
 const [quantity, dispQuantity] = useReducer(reducer, el.quantity);

 function reducer(state: any, action: any) {
  switch (action) {
   case 'plus':
    return state + 1;
   case 'minus':
    return state - 1;
   default:
    throw new Error('Incorrect.');
  }
 }

 useEffect(() => {
  if (quantity < 1) dispatch(removeCart({ el }));
  dispatch(setQuantity({ el, quantity }));
 }, [quantity]);

 return (
  <li className="flex flex-col items-center last:border-b-0 border-b-[1px] border-[lightgray] p-[10px_5px]">
   <img
    className="w-[100px] h-[100px] object-contain mb-[10px]"
    src={el.image}
    alt=""
   />
   <p className="text-center mb-[10px]">{el.title}</p>
   <div className="flex items-center">
    <button
     className="w-[25px] h-[25px] border rounded-full bg-[url('./img/svg/dash-lg.svg')] bg-cover bg-[black]"
     onClick={() => dispQuantity('minus')}
    ></button>
    <input
     className="grow-0 text-[20px] text-center w-[70px] p-0"
     type="text"
     readOnly
     value={quantity}
    />
    <button
     className="w-[25px] h-[25px] border rounded-full bg-[url('./img/svg/plus-lg.svg')] bg-cover bg-[black]"
     onClick={() => dispQuantity('plus')}
    ></button>
   </div>
  </li>
 );
}

export default ProductInCart;

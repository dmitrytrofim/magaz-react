import { useDispatch } from 'react-redux';
import { IProduct } from '../models';
import { quantityIncrement } from '../store/features/cartSlice';

function ProductInCart({ el }: { el: IProduct }) {
 // const cart = useSelector((state: any) => state.cart.value);
 const dispatch = useDispatch();

 return (
  <li className="flex flex-col items-center last:border-b-0 border-b-[1px] border-[lightgray] p-[10px_5px]">
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
     readOnly
     value={el.quantity}
    />
    <button
     className="w-[25px] h-[25px] border rounded-full bg-[url('./img/svg/plus-lg.svg')] bg-cover bg-[black]"
     onClick={() => dispatch(quantityIncrement(el))}
    ></button>
   </div>
  </li>
 );
}

export default ProductInCart;

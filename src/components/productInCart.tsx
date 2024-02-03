import { useState, useContext, useEffect } from 'react';
import { IProduct } from '../models';
import { CartContext } from './cartContext';

function ProductCart({ el }: { el: IProduct }) {
 const [quantity, setQuantity] = useState<number>(1);
 const [, setCart] = useContext(CartContext);

 const changeQuantity = () => {
  setQuantity((x) => x + 1);
 };

 useEffect(() => {
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
     value={quantity}
     readOnly
    />
    <button
     className="w-[25px] h-[25px] border rounded-full bg-[url('./img/svg/plus-lg.svg')] bg-cover bg-[black]"
     onClick={() => changeQuantity()}
    ></button>
   </div>
  </li>
 );
}

export default ProductCart;

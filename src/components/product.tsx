import { useContext, useState } from 'react';
import { IProduct } from '../models';
import { CartContext } from './cartContext';

interface ProductProps {
 item: IProduct;
}

export function Product({ item }: ProductProps) {
 const [details, setDetails] = useState<Boolean>(false);
 const [cart, setCart] = useContext(CartContext);

 const showDetails = () => {
  setDetails((details) => !details);
 };

 const addToCartAndRemove = (product: IProduct) => {
  if (cart.includes(product)) {
   setCart((x: any) => x.filter((el: any) => el !== product));
  } else {
   setCart((x: IProduct[]) => {
    product.quantity = 1;
    return [product, ...x];
   });
  }
 };

 return (
  <div className="flex flex-col border rounded-[5px] p-5" key={item.id}>
   <p className="text-[20px] text-center text-ellipsis whitespace-nowrap overflow-hidden mb-[20px]">
    {item.title}
   </p>
   <img
    className="w-[200px] h-[200px] object-contain object-center mx-auto mb-[20px]"
    src={item.image}
    alt=""
   />
   <p className="self-center text-[24px] mb-[15px]">
    Cost: <span className="font-700 text-[red]">{item.price}$</span>
   </p>
   <button
    className={`border self-center px-3 py-1 rounded-[10px] text-[white] mb-[10px] ${
     cart.includes(item) ? 'bg-[black]' : 'bg-[red]'
    }`}
    type="button"
    onClick={() => addToCartAndRemove(item)}
   >
    {cart.includes(item) ? 'Remove' : 'Add to cart'}
   </button>
   <button
    className={`border self-center px-3 py-1 rounded-[10px] ${
     details ? 'text-[black] mb-[10px]' : 'text-[blue]'
    }`}
    type="button"
    onClick={showDetails}
   >
    {details ? 'Hide details' : 'Show details'}
   </button>
   {details && <p className="text-[18px]">{item.description}</p>}
  </div>
 );
}

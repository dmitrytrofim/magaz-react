import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function PopupOrder() {
 const popup = useSelector((state: any) => state.popup.value);

 useEffect(() => {
  if (popup) {
   document.body.style.overflow = 'hidden';
  } else {
   document.body.style.overflow = 'visible';
  }
 }, [popup]);

 return (
  <div className={`fixed inset-0 bg-[rgba(0,0,0,0.3)] ${!popup && 'hidden'}`}>
   <form action="send.js" className=""></form>
  </div>
 );
}

export default PopupOrder;

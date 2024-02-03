import './assets/index.css';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import { CartProvider } from './components/cartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <CartProvider>
   <App />
  </CartProvider>
 </StrictMode>
);

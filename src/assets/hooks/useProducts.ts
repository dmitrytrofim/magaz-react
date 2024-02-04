import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { setProducts } from '../../store/features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

export function useProducts() {
 const products = useSelector((state: any) => state.products.value);
 const dispatch = useDispatch();
 const [loading, setLoading] = useState<boolean>(true);
 const [loadError, setLoadError] = useState<string>('');

 async function loadProducts() {
  try {
   setLoading(true);
   setLoadError('');
   const response = await axios.get('https://fakestoreapi.com/products');
   setLoading(false);
   dispatch(setProducts(response.data));
  } catch (error: any) {
   console.error(new Error(error.message));
   setLoadError('Sorry, the store is broken!');
  }
 }

 useLayoutEffect(() => {
  loadProducts();
 }, []);

 return { products, loading, loadError };
}

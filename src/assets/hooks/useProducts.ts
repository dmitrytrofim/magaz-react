import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../features/productsSlice';

export function useProducts() {
 const products = useSelector((state: any) => state.value);
 const dispatch = useDispatch();
 const [loading, setLoading] = useState<boolean>(true);
 const [loadError, setLoadError] = useState<string>('');

 async function loadProducts() {
  try {
   setLoading(true);
   setLoadError('');
   const response = await axios.get('https://fakestoreapi.com/products');
   dispatch(setProducts(response.data));
   setLoading(false);
  } catch (error: any) {
   console.error(new Error(error.message));
   setLoadError('Sorry, the store is broken!');
  }
 }

 useEffect(() => {
  loadProducts();
 }, []);

 return { products, loading, loadError };
}

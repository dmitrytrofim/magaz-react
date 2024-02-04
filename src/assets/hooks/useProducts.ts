import { useState, useEffect } from 'react';
// import { IProduct } from '../../models';
import axios from 'axios';
import { setProducts } from '../../features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

export function useProducts() {
 // const [products, setProducts] = useState<IProduct[]>([]);
 const products = useSelector((state: any) => state.products);
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

 useEffect(() => {
  loadProducts();
 }, []);

 return { products, loading, loadError };
}

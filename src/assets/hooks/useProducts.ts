import { useState, useEffect } from 'react';
import { IProduct } from '../../models';
import axios from 'axios';

export function useProducts() {
 const [products, setProducts] = useState<IProduct[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [loadError, setLoadError] = useState<string>('');

 async function loadProducts() {
  try {
   setLoading(true);
   setLoadError('');
   const response = await axios.get('https://fakestoreapi.com/products');
   setLoading(false);
   setProducts(response.data);
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

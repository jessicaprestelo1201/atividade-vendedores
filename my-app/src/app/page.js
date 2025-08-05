'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from './page.module.css';
import productsData from '../data/products';


export default function Home() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 1000);
  }, []);


  return (
    <main className={styles.main}>
      <h2>Produtos ({products.length})</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}




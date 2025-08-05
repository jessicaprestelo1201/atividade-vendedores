'use client';


import { useState, useEffect } from 'react';
import ProductCard from '../app/components/ProductCard/ProductCard';
import styles from './page.module.css';
import productsData from '../app/data/products';


export default function Home() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    // Simulação de carregamento
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




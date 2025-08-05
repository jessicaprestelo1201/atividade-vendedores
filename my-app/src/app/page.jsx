"use client";

import { useState } from 'react';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';

export default function HomePage() {
  const [header, setHeader] = useState({
    
    title: '🛒 Loja de Eletrônicos',
    subtitle: 'Os melhores produtos com os melhores preços!',
    totalProducts: 4
  });

  return (
    <div>
      <Header
        title={header.title}
        subtitle={header.subtitle}
        totalProducts={header.totalProducts}
      />
      <ProductCard />
      <ProductCard />

    </div>
  );
}




